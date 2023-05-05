<template>
  <section class="container mx-auto text-center border-2 md:px-40 py-4 fixed top-0 left-0 right-0">
    <nav class="flex justify-between px-4">
      <div class="md:hidden z-20" v-if="!burgerToggle" @click.prevent="burgerToggle = true">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
      <div class="md:hidden z-20" v-if="burgerToggle" @click.prevent="burgerToggle = false">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <a href="" class="text-xl">
        Логотип
      </a>
      <ul
          class=" w-3/4 h-screen absolute top-0 bg-slate-50 left-0 md:static md:flex z-10 border-2"
          :class="burgerToggle ? 'block' : 'hidden'"
      >
        <li class="p-2">
          <a href="">Услуги</a>
        </li>
        <li class="p-2">
          <a href="">О нас</a>
        </li>
        <li class="p-2">
          <a href="">Отзывы</a>
        </li>
        <li class="p-2">
          <a href="">Контакты</a>
        </li>
      </ul>
      <button class="block w-20 md:w-60 p-1 bg-slate-400 text-white rounded">Получить консультацию</button>
    </nav>
  </section>
</template>

<script setup>
import {ref} from "vue";

const burgerToggle = ref(false)
</script>

<style scoped>

</style>