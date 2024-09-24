<template>
  <div class="min-h-screen flex flex-col mx-auto">
    <AppHeader />
    <MainSection @start-test="startTest" />
    <FullScreenTest v-if="testing" :isTesting="testing" :onEndTest="endTest" />
    <AppFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AppHeader from './components/AppHeader.vue';
import MainSection from './components/MainSection.vue';
import FullScreenTest from './components/FullScreenTest.vue';
import AppFooter from './components/AppFooter.vue';

const testing = ref(false);

const startTest = () => {
  testing.value = true;
};

const endTest = () => {
  testing.value = false;
};
</script>
