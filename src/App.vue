<script setup>
import { useGameSetupStore } from '@/stores/GameSetupStore';
import { storeToRefs } from 'pinia';

import GameContainer from './components/GameContainer.vue';
import NewGameSettings from './components/NewGameSettings.vue';
import ScoreBoard from './components/ScoreBoard.vue';

const gameSetupStore = useGameSetupStore();

let { isStarted, isFinished } = storeToRefs(gameSetupStore);

</script>

<template>
  <main class="game-container">
    <NewGameSettings v-if="!isStarted" />
    <GameContainer v-if="isStarted && !isFinished" />
    <ScoreBoard v-if="isFinished" />
  </main>
</template>

<style scoped>
.game-container {
  box-shadow: rgba(255, 255, 255, 0.75) 0px 10px 30px -10px;
  background-color: #fff;
  border-radius: 10px;
  padding: 1rem;
  min-width: 320px;
  max-width: 520px;
}
</style>
