<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue"
import { useWindowScroll } from "@vueuse/core"

const scrolled = ref(false)

// Listen to the scroll event
const { y } = useWindowScroll()
onMounted(() => {
  const handleScroll = () => {
    scrolled.value = y.value > 0
  }
  window.addEventListener("scroll", handleScroll)
  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll)
  })
})

const scrollToAnchor = (anchorId: string) => {
  const element = document.getElementById(anchorId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}
</script>

<template>
  <div
    class="w-full flex flex-row justify-around pt-16 font-medium">
    <NuxtImg
      :src="
        !scrolled
          ? '/nmar_logo.png'
          : '/nmar_logo_white.png'
      "
      class="h-full duration-200" />
    <button
      @click="scrollToAnchor('tattoos')"
      class=""
      :class="scrolled ? 'text-slate-800' : 'text-white'">
      Tattoos
    </button>
    <button
      @click="scrollToAnchor('artwork')"
      :class="scrolled ? 'text-slate-800' : 'text-white'">
      Artwork
    </button>
    <button
      @click="scrollToAnchor('contact')"
      :class="scrolled ? 'text-slate-800' : 'text-white'">
      Contact
    </button>
  </div>
</template>

<style scoped></style>
