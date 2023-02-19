
<script setup>
import { useGameSetupStore } from '@/stores/GameSetupStore';
import { storeToRefs } from 'pinia';
import { ref, watch } from 'vue';

const gameSetupStore = useGameSetupStore();
let { roundCount, isStarted } = storeToRefs(gameSetupStore); 

const validationText = ref("");
let isValid = false;

watch(roundCount, (newValue) => {
  if (newValue > 15 || newValue < 5) { 
    validationText.value = "❌ The value must be between 5 and 15";
    isValid = false;
  }
  else {
    validationText.value = "";
    isValid = true;
  }
})

const validateInput = () => {
  return roundCount.value <= 15 && roundCount.value >= 5 ? isStarted.value = true : isStarted.value = false
}
</script>

<template>
  <section>
    <h1>Guess the Flag</h1>
    <div>
      <div class="form-settings">
        <label for="round-count">Number of rounds: </label>
        <input
          v-model="roundCount"
          placeholder="15"
          aria-label="Number of rounds"
          type="number"
          id="round-count"
          name="round-count"
        >
      </div>
      <div>
        <p
          class="validation-text"
          :class="{ 'not-valid': !isValid }"
        >
          {{ validationText }}
        </p>
      </div>
    </div>

    <button @click="validateInput">
      Submit
    </button>
  </section>
</template>

<style scoped>

section {
  display: grid;
  grid-auto-rows: 4rem 4rem auto;
}

.form-settings {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  border: 1px #FFCFA4 solid;
  border-radius: 5px;
  padding: 0 0 0 10px;
}

input {
  font-size: 1.2rem;
  max-width: 4em;
  background: #FFCFA4;
  padding: 5px 8px;
  border: none;
}

.validation-text {
  text-align: center;
}

.not-valid {
  color: red;
}

</style>
