<script lang="ts" setup>
import { scrolled } from "~/composables/states"

function scrollToAnchor(anchorId: string): void {
  const element = document.getElementById(anchorId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}
</script>

<template class="sticky">
  <div
    class="w-full flex flex-row justify-around pt-16 font-medium">
    <NuxtImg src="/nmar_logo_white.png" class="h-full" />
    <button @click="scrollToAnchor('tattoos')">
      <p
        :class="{
          'text-black': !scrolled,
          'text-white': scrolled,
        }">
        Tattoos
      </p>
    </button>
    <button @click="scrollToAnchor('artwork')">
      Artwork
    </button>
    <button @click="scrollToAnchor('contact')">
      Contact
    </button>
  </div>
</template>

<style scoped></style>
