<template>
  <header class="text-white text-center">
    <div class="items-center mx-auto relative text-center w-full ">
      <h1 class="text-3xl font-bold  w-max text-black [box-shadow:inset_0px_-3px_13px_-4px_black] bg-white font-gomePixel px-[50px] py-[10px] rounded-bl-[30px] rounded-br-[30px] m-auto">{{ $t('header-title') }}</h1>
      <div class=" inline-block text-left top-[130%] w-max mx-[auto] my-[0] left-[0] right-[0] text-black bg-[white] px-[20px] py-[10px] rounded-[20px] relative mt-[16px]">
        <div @click="toggleDropdown" class="cursor-pointer flex items-center">
          <img :src="currentLanguage == 'en' ? '/en32.png' : '/tr32.png'" class="w-6 h-6" alt="Flag" />
          <span class="ml-2">{{ currentLanguage.toUpperCase() }}</span>
        </div>
        <div
          v-if="dropdownOpen"
          class="absolute right-0 mt-2 w-28 bg-white text-black rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-20"
        >
          <button
            @click="changeLanguage('en')"
            class="w-full text-left px-4 py-2 text-sm hover:bg-gray-200 flex items-center"
          >
            <img src="/en32.png" class="w-6 h-6 mr-2" alt="English Flag" />
            EN
          </button>
          <button
            @click="changeLanguage('tr')"
            class="w-full text-left px-4 py-2 text-sm hover:bg-gray-200 flex items-center"
          >
            <img src="/tr32.png" class="w-6 h-6 mr-2" alt="Turkish Flag" />
            TR
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';

const { locale } = useI18n();
const currentLanguage = ref(locale.value || 'tr');
const dropdownOpen = ref(false);

const changeLanguage = (lang) => {
  locale.value = lang;
  currentLanguage.value = lang;
  dropdownOpen.value = false;
};

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};
</script>
