<script setup lang="ts">
import { ref } from 'vue'
import { birthdate, birthdateDigit } from '../composables/birthdate'

const result = ref('')
const updateResult = (event: Event) => {
    const target = event.target as HTMLInputElement
    result.value = target.value
}
</script>

<template>
    <span>Date de naissance</span>
    <input @input="updateResult" type="date" />
    <div data-testid="first-method-result">{{ birthdate(result) }}</div>
    <div data-testid="second-method-result">{{ birthdateDigit(result) }}</div>
</template>
