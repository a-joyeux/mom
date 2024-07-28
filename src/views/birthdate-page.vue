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
    <div class="p-4 flex flex-col gap-2 rounded border shadow-lg bg-white">
        <div class="flex gap-4 items-center">
            <span>Date de naissance</span>
            <input class="bg-transparent border px-3 py-0.5" @input="updateResult" type="date" />
        </div>
        <hr />
        <div data-testid="first-method-result">{{ 'Première méthode : ' + firstMethod(result) }}</div>
        <div data-testid="second-method-result">{{ 'Seconde méthode : ' + secondMethod(result) }}</div>
    </div>
</template>
