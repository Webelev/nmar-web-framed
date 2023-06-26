<script lang="ts" setup></script>

<template>
  <div class="relative">
    <TheHeader class="fixed z-10" />
    <slot />

    <button
      class="fixed flex bg-white text-blue p-4 bottom-0 left-2/4">
      To top
    </button>
    <TheFooter />
  </div>
</template>

<style scoped></style>
