<template>
  <header class="bg-blue-600 text-white py-4 text-center">
    <div class="flex justify-between items-center mx-auto max-w-6xl">
      <h1 class="text-3xl font-bold">{{ $t('header-title') }}</h1>
      <div class="relative inline-block text-left">
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
