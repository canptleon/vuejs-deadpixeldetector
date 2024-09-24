<template>
  <main class="flex flex-grow justify-between font-gomePixel2 sm2:flex-col sm2:gap-[10px]">
    <div class="w-1/2 sm2:w-full p-4 md:px-[20px] items-center flex flex-col text-left justify-around px-[60px] xs:gap-[30px]">
      <div class="bg-[white] p-[18px] rounded-[20px] [box-shadow:inset_3px_3px_15px_-4px_black]">
        <h2 class="text-xl font-bold mb-4 font-gomePixel">{{ $t('left-s1-header') }}</h2>
          <p>{{ $t('left-s1-p') }}</p>
          <ul class="list-disc ml-5 mt-2 md:text-[14px] sm:text-[12px]">
            <li>{{ $t('left-s1-li1') }}</li>
            <li>{{ $t('left-s1-li2') }}</li>
            <li>{{ $t('left-s1-li3') }}</li>
          </ul>
      </div>
      <div class="bg-[white] p-[18px] rounded-[20px] [box-shadow:inset_3px_3px_15px_-4px_black]">
        <h2 class="text-xl font-bold mb-4 font-gomePixel">{{ $t('right-s1-header') }}</h2>
        <p>{{ $t('right-s1-p') }}</p>
        <ul class="list-disc ml-5 mt-2 md:text-[14px] sm:text-[12px]">
          <li>{{ $t('right-s1-li1') }}</li>
          <li>{{ $t('right-s1-li2') }}</li>
          <li>{{ $t('right-s1-li3') }}</li>
          <li>{{ $t('right-s1-li4') }}</li>
        </ul>
      </div>
    </div>
    <div class="w-1/2 mx-auto p-4 flex flex-col justify-center items-center md:px-[20px] px-[60px] xs:w-full">
      <div class="bg-[white] p-[18px] rounded-[20px] text-center [box-shadow:inset_3px_3px_15px_-4px_black]">
        <h2 class="text-xl font-bold mb-4 font-gomePixel">{{ $t('left-s2-header') }}</h2>
        <p>{{ $t('left-s2-p') }}</p>
      </div>
      <AppExamples class="mb-8" />
        <button @click="$emit('start-test')" class="px-6 py-3 text-black text-xl bg-white rounded [box-shadow:inset_3px_3px_15px_-4px_black] font-gomePixel">
          {{ $t('start') }}
        </button>
    </div>
  </main>
</template>

<script setup>
  import AppExamples from './AppExamples.vue';
</script>
