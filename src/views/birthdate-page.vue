<script setup lang="ts">
import { inject, ref } from 'vue'
import { birthdate, birthdateDigit } from '../composables/birthdate'

const result = ref('')
const firstMethod = inject('birthdate', birthdate)
const secondMethod = inject('birthdateDigit', birthdateDigit)
const updateResult = (event: Event) => {
    const target = event.target as HTMLInputElement
    result.value = target.value
}
</script>

<template>
    <span>Date de naissance</span>
    <input @input="updateResult" type="date" />
    <div data-testid="first-method-result">{{ firstMethod(result) }}</div>
    <div data-testid="second-method-result">{{ secondMethod(result) }}</div>
</template>
