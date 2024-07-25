<script setup lang="ts">
import { ref } from 'vue'

const result = ref()
const updateResult = (event: Event) => {
    const target = event.target as HTMLInputElement
    result.value = target.value
}
</script>

<template>
    <span>Date de naissance</span>
    <input @input="updateResult" type="date" />
    <button>Go</button>
    <div data-testid="result">{{ result }}</div>
</template>
