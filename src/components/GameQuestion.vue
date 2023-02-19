<script setup>
import { useGameQuizStore } from '@/stores/GameQuizStore';
import { storeToRefs } from 'pinia';

const gameQuizStore = useGameQuizStore();
const { currentQuestion } = storeToRefs(gameQuizStore);
</script>

<template>
  <div class="question">
    <p class="question__text">
      Which country's flag is this?
    </p>
    <div class="question__flag">
      {{ currentQuestion.questionFlag }}
    </div>
  </div>
</template>

<style scoped>
.question {
  text-align: center;
}

.question__text {
  font-size: 1.3rem;
}

.question__flag {
  font-size: 3rem;
}
</style>
