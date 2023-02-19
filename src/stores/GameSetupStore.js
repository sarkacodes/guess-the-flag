import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useGameSetupStore = defineStore('GameSetup', () => {
  const roundCount = ref(5);
  const isStarted = ref(false);
  const isFinished = ref(false);

  return { roundCount, isStarted, isFinished }
})
