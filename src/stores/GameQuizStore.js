import { useGameScoreStore } from '@/stores/GameScoreStore'
import { useGameSetupStore } from '@/stores/GameSetupStore'
import arrayShuffle from 'array-shuffle'
import countryFlagEmoji from "country-flag-emoji"
import { defineStore, storeToRefs } from 'pinia'
import { reactive } from 'vue'

export const useGameQuizStore = defineStore('GameQuiz', () => {

  const gameSetupStore = useGameSetupStore();
  const gameScoreStore = useGameScoreStore();
  let { roundCount, isFinished } = storeToRefs(gameSetupStore);
  let { currentGameScore } = storeToRefs(gameScoreStore);


  const allQuizData = [];

  function generateNewQuizSet() {

    const numberOfAnswers = roundCount.value * 4;
    const shuffledCountryCodes = arrayShuffle(countryFlagEmoji.countryCodes);
    const finalCountryCodes = shuffledCountryCodes.slice(0, numberOfAnswers);
  
    for (var i = 0; i < finalCountryCodes.length; i += 4) {
      allQuizData.push(finalCountryCodes.slice(i, i + 4));
    }
    return allQuizData;
  }

  const currentQuestion = reactive({
    number: 0,
    correctAnswerCode: "",
    questionFlag: ""
  });

  function renderQuestion() {
    let rndNumber = Math.floor(Math.random() * 4);
    currentQuestion.correctAnswerCode = allQuizData[currentQuestion.number][rndNumber];
    currentQuestion.questionFlag = countryFlagEmoji.get(currentQuestion.correctAnswerCode).emoji;
  }

  function answerClick(answer) {
    if (answer === currentQuestion.correctAnswerCode) {
        currentGameScore.value++;
    }


    if (currentQuestion.number < allQuizData.length - 1) {
      currentQuestion.number++;
      renderQuestion();
    }
    else {
      return isFinished.value = true;
    }
  }
   
  return { allQuizData, generateNewQuizSet, currentQuestion, renderQuestion, answerClick }
  
})
