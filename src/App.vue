<script setup>
import { RouterView } from "vue-router";
import Header from "./components/modules/TheHeader.vue";
import Footer from "./components/modules/TheFooter.vue";
</script>

<template>
    <header><Header /></header>
    <main><RouterView /></main>
    <footer><Footer /></footer>
</template>

<style scoped>
main {
  display: flex;
  flex: 1;
}
footer {
  margin-top: auto;
  padding: 0.1rem 1rem;
}
</style>
