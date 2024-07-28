<script setup lang="ts">
import { inject, ref } from 'vue'
import { names } from '../composables/names'

const result = ref('')
const nameFormula = inject('names', names)
const updateResult = (event: Event) => {
    const target = event.target as HTMLInputElement
    result.value = target.value
}
</script>

<template>
    <div class="p-4 flex flex-col gap-2 rounded border shadow-lg bg-white">
        <div class="flex gap-4 items-center">
            <span>Prénoms et nom complets</span>
            <input class="bg-transparent border px-3 py-0.5" @input="updateResult" type="text" />
        </div>
        <div data-testid="complete-name-before">
            {{ 'Nom entier avant réduction : ' + nameFormula(result).completeName }}
        </div>
        <div data-testid="vowel-before">
            {{ 'Voyelles avant réduction : ' + nameFormula(result).vowel }}
        </div>
        <div data-testid="consonant-before">
            {{ 'Consonnes avant réduction : ' + nameFormula(result).consonant }}
        </div>
        <div data-testid="formula-vowel">
            {{ 'Calcul des voyelles : ' + nameFormula(result).reducedVowel }}
        </div>
        <div data-testid="formula-consonant">
            {{ 'Calcul de consonnes : ' + nameFormula(result).reducedConsonant }}
        </div>
        <div data-testid="formula-complete-name">
            {{ 'Calcul du nom entier : ' + nameFormula(result).reducedCompleteName }}
        </div>
        <div data-testid="delta-vowels">
            {{ 'Calcul du delta des voyelles : ' + nameFormula(result).reducedDeltaVowel }}
        </div>
        <div data-testid="delta-consonants">
            {{ 'Calcul du delta des consonnes : ' + nameFormula(result).reducedDeltaConsonant }}
        </div>
    </div>
</template>
