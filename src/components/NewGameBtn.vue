<script setup>

import { useGameQuizStore } from '@/stores/GameQuizStore';
import { useGameScoreStore } from '@/stores/GameScoreStore';
import { useGameSetupStore } from '@/stores/GameSetupStore';
import { storeToRefs } from 'pinia';

const gameSetupStore = useGameSetupStore();
const gameScoreStore = useGameScoreStore();
const gameQuizStore = useGameQuizStore();

let { isStarted, isFinished } = storeToRefs(gameSetupStore); 
let { currentGameScore } = storeToRefs(gameScoreStore); 
let { currentQuestion, allQuizData } = gameQuizStore; 

const startNewGame = () => {
    isStarted.value = false;
    isFinished.value = false;
    currentGameScore.value = 0;

    currentQuestion.number = 0; 
    allQuizData.length = 0;
}

</script>

<template>
  <ul>
    <button @click="startNewGame">
      NEW GAME
    </button>
  </ul>
</template>

<style scoped>

</style>
