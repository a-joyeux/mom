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
    <div class="p-4 flex flex-col gap-2 bg-red-500">
        <div class="flex gap-4">
            <span>Date de naissance</span>
            <input @input="updateResult" type="date" />
        </div>
        <div data-testid="first-method-result">{{ firstMethod(result) }}</div>
        <div data-testid="second-method-result">{{ secondMethod(result) }}</div>
    </div>
</template>
