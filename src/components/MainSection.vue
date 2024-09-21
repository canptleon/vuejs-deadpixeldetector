<template>
  <main class="flex flex-grow justify-between p-8 bg-gray-100">
    <div class="w-1/3 p-4">
      <h2 class="text-xl font-bold mb-4">Why should you do this test?</h2>
      <p>This test helps you identify dead pixels on your screen that may not be visible during regular use.</p>
      <ul class="list-disc ml-5 mt-2">
        <li>Early detection of dead pixels helps with warranty claims.</li>
        <li>Spot issues that could worsen over time if not addressed.</li>
        <li>Get a clearer understanding of your screen’s quality.</li>
      </ul>
      <h2 class="text-xl font-bold mt-8 mb-4">How to do this test?</h2>
      <p>Simply click the "Start Test" button and follow the fullscreen color transitions. Each keypress or mouse click will cycle through 10 different colors.</p>
    </div>
    <div class="w-1/3 p-4 flex justify-center items-center">
      <button @click="$emit('start-test')" class="px-6 py-3 bg-blue-500 text-xl text-white rounded hover:bg-blue-600">
        Start Test
      </button>
    </div>
    <div class="w-1/3 p-4">
      <h2 class="text-xl font-bold mb-4">What if you find a dead pixel?</h2>
      <p>If you find a dead pixel, follow these steps:</p>
      <ul class="list-disc ml-5 mt-2">
        <li>Check your device's warranty to see if dead pixels are covered.</li>
        <li>Contact the manufacturer or retailer for a repair or replacement.</li>
        <li>Try using pixel-fixing software or manual techniques like gently massaging the screen.</li>
      </ul>
    </div>
  </main>
</template>
