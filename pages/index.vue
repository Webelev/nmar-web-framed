<script lang="ts" setup></script>

<template class="scroll-smooth">
  <section
    id="top"
    class="relative w-full h-screen overflow-hidden">
    <div class="absolute w-full -z-10">
      <div
        class="absolute bg-gradient-to-b from-transparent from-40% via-black to-black h-full w-full top-0 z-10"></div>
      <NuxtImg
        src="/stn_himself.jpg"
        class="object-bottom w-96 right-1/4 top-1/4 absolute rounded-sm rotate-[-32deg] -translate-x-48"></NuxtImg>
      <NuxtImg
        src="/as_above_so_below.jpg"
        class="object-bottom w-96 left-2/4 top-1/4 absolute rounded-sm translate-x-36"></NuxtImg>
      <NuxtImg
        src="/bat_lady.jpg"
        class="object-bottom w-96 left-1/4 top-1/4 absolute rounded-sm rotate-[4deg]"></NuxtImg>
      <NuxtImg
        src="/queen_of_hell.jpg"
        class="object-bottom w-96 left-1/4 absolute rounded-sm rotate-[74deg] translate-x-48"></NuxtImg>
      <NuxtImg src="/fb_oak.jpg" class=""></NuxtImg>
    </div>
  </section>
  <section id="tattoos" class="bg-black h-screen">
    <div class="container flex flex-row">
      <article class="prose prose-h1:text-white">
        <h1>The Ink Conjurer</h1>
      </article>
    </div>
  </section>
  <section
    id="artwork"
    class="bg-red-500 h-screen"></section>
  <section
    id="contact"
    class="bg-green-500 h-screen"></section>
</template>

<style scoped></style>
