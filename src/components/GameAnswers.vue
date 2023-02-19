<script setup>
import { useGameQuizStore } from "@/stores/GameQuizStore";
import countryFlagEmoji from "country-flag-emoji";
const gameQuizStore = useGameQuizStore();
const { allQuizData, answerClick, currentQuestion } = gameQuizStore;
</script>

<template>
  <ul>
    <li v-for="item in allQuizData[currentQuestion.number]" @click="answerClick(countryFlagEmoji.get(item).code)">
      {{ countryFlagEmoji.get(item).name }}
    </li>
  </ul>
</template>


<style scoped>
ul {
  list-style: none;
  color: #fff;
  font-size: 1rem;
}

li {
  padding: 10px 8px;
  cursor: pointer;
  margin: 5px;
  background: #0b3059;
}
</style>
