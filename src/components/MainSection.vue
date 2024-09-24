<template>
  <main class="flex flex-grow justify-between p-8 bg-gray-100">
    <div class="w-1/3 p-4">
      <h2 class="text-xl font-bold mb-4">{{ $t('left-s1-header') }}</h2>
      <p>{{ $t('left-s1-p') }}</p>
      <ul class="list-disc ml-5 mt-2">
        <li>{{ $t('left-s1-li1') }}</li>
        <li>{{ $t('left-s1-li2') }}</li>
        <li>{{ $t('left-s1-li3') }}</li>
      </ul>
      <h2 class="text-xl font-bold mt-8 mb-4">{{ $t('left-s2-header') }}</h2>
      <p>{{ $t('left-s2-p') }}</p>
    </div>
    <div class="w-1/3 p-4 flex flex-col justify-center items-center">
      <AppExamples class="mb-8" />
      <button @click="$emit('start-test')" class="px-6 py-3 bg-blue-500 text-xl text-white rounded hover:bg-blue-600">
        {{ $t('start') }}
      </button>
    </div>
    <div class="w-1/3 p-4">
      <h2 class="text-xl font-bold mb-4">{{ $t('right-s1-header') }}</h2>
      <p>{{ $t('right-s1-p') }}</p>
      <ul class="list-disc ml-5 mt-2">
        <li>{{ $t('right-s1-li1') }}</li>
        <li>{{ $t('right-s1-li2') }}</li>
        <li>{{ $t('right-s1-li3') }}</li>
        <li>{{ $t('right-s1-li4') }}</li>
      </ul>
    </div>
  </main>
</template>

<script setup>
  import AppExamples from './AppExamples.vue';
</script>
