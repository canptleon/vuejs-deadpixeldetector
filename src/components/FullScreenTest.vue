<template>
  <div id="fullscreen" class="fixed inset-0 bg-black"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  isTesting: Boolean,
  onEndTest: Function,
});

const colors = ['#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#808080', '#FF8000'];
const currentColorIndex = ref(0);
const maxColors = colors.length;

const exitFullscreen = async () => {
  if (document.fullscreenElement) {
    await document.exitFullscreen();
  }
};

const changeColor = () => {
  const fullscreenElement = document.getElementById('fullscreen');

  if (currentColorIndex.value < maxColors - 1) {
    currentColorIndex.value += 1;
    fullscreenElement.style.backgroundColor = colors[currentColorIndex.value];
  } else {
    exitFullscreen();
    props.onEndTest();
  }
};

onMounted(() => {
  const fullscreenElement = document.getElementById('fullscreen');

  fullscreenElement.addEventListener('click', async () => {
    if (!document.fullscreenElement) {
      await fullscreenElement.requestFullscreen();
    }
    fullscreenElement.style.backgroundColor = colors[currentColorIndex.value];
    window.addEventListener('keydown', changeColor);
    fullscreenElement.addEventListener('click', changeColor);
  });
});
</script>

<style scoped>
.fixed {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
}
</style>
