<script setup>

import { useGameQuizStore } from '@/stores/GameQuizStore';
import GameAnswers from './GameAnswers.vue';
import GameQuestion from './GameQuestion.vue';

const gameQuizStore = useGameQuizStore();

const { generateNewQuizSet, renderQuestion } = gameQuizStore;

generateNewQuizSet();

renderQuestion();


</script>

<template>
  <div>
    <GameQuestion />

    <GameAnswers />
  </div>
</template>




<style scoped></style>
