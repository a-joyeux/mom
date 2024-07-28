<script setup lang="ts">
import BirthdatePage from './views/birthdate-page.vue'
import NamesPage from './views/names-page.vue'
</script>

<template>
    <div class="flex pl-2 bg-[#EAF0CE] items-center gap-4 font-bold"><img alt="logo" src="/logo.svg" /> Mom</div>
    <div class="flex flex-col bg-[#D2FDFF] h-full p-4">
        <BirthdatePage />
        <NamesPage />
    </div>
</template>
