<script setup>

import { useGameScoreStore } from '@/stores/GameScoreStore';
import { useGameSetupStore } from '@/stores/GameSetupStore';
import NewGameBtn from './NewGameBtn.vue';

const gameScoreStore = useGameScoreStore();
const gameSetupStore = useGameSetupStore();
const { currentGameScore } = gameScoreStore;
const { roundCount } = gameSetupStore;

</script>

<template>
  <section class="score">
    <h1>Guess the Flag</h1>
    <div>
      <h2>Score</h2>
      <p>{{ currentGameScore }} / {{ roundCount }}</p>
    </div>
    <NewGameBtn />
  </section>
</template>

<style scoped>
.score {
  display: grid;
  grid-auto-rows: 3rem 5rem auto;
  text-align: center;
}
</style>
