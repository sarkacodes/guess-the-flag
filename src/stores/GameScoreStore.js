import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useGameScoreStore = defineStore('GameScore', () => {
  const currentGameScore = ref(0);
  return { currentGameScore }
})
