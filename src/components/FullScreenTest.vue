<template>
  <div
    id="fullscreen"
    class="fixed inset-0 w-full h-full bg-black flex justify-center items-center"
  ></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { getNativeWebDevice } from '../utils/deviceUtils';

const props = defineProps({
  isTesting: Boolean,
  onEndTest: Function,
});

const colors = ['#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#808080', '#FF8000'];
const currentColorIndex = ref(0);
const maxColors = colors.length;

const deviceType = getNativeWebDevice(navigator.userAgent);

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

const requestFullscreen = async () => {
  const fullscreenElement = document.getElementById('fullscreen');

  if (!document.fullscreenElement) {
    try {
      await fullscreenElement.requestFullscreen();
    } catch (error) {
      console.error('Fullscreen request failed:', error);
    }
  } else if (deviceType === 'iOS') {
    fullscreenElement.classList.add('fullscreen-simulate');
  }
};

onMounted(() => {
  const fullscreenElement = document.getElementById('fullscreen');

  const startFullscreen = async (event) => {
    event.preventDefault();
    await requestFullscreen();
    fullscreenElement.style.backgroundColor = colors[currentColorIndex.value];
  };

  const handleTouchEnd = (event) => {
    event.preventDefault();
    changeColor();
  };

  if (deviceType === 'Android' || deviceType === 'Desktop') {
    fullscreenElement.addEventListener('click', startFullscreen);
    fullscreenElement.addEventListener('click', changeColor);
  } else if (deviceType === 'iOS') {
    fullscreenElement.addEventListener('touchend', startFullscreen);
    fullscreenElement.addEventListener('touchend', handleTouchEnd);
  }

  window.addEventListener('keydown', changeColor);
});

onUnmounted(() => {
  window.removeEventListener('keydown', changeColor);
});
</script>

<style scoped>
.fixed {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
}

.fullscreen-simulate {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  z-index: 9999;
}

.fullscreen-bg {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: black;
}
</style>
