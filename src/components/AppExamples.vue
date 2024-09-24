<template>
  <div class="flex justify-center">
    <div class="grid grid-cols-5 gap-4 p-10">
      <div v-for="(color, index) in colors" :key="index" :style="{ backgroundColor: color }" class="relative w-20 h-20">
        <div class="absolute inset-0 flex justify-center items-center">
          <div class="w-1 h-1 bg-green-500"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const colors = ['#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#808080', '#FF8000'];
</script>
