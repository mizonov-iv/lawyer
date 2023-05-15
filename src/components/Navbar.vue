<template>
  <section class="container mx-auto text-center border-2 md:px-40 py-4  ">
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
      <router-link to="/" class="text-xl">
        <img class="w-14" src="/logo.png" alt="">
      </router-link>
        <ul
            class=" w-3/4 md:w-6/12 h-screen md:h-fit absolute top-0 left-0 md:static md:flex z-10"
            :class="burgerToggle ? 'block' : 'hidden'"
        >
          <li class="p-3 hover:scale-110 transition duration-700 ease-in-out">
            <router-link to="/">Главная</router-link>
          </li>
          <li class="p-3 hover:scale-110 transition duration-700 ease-in-out">
            <router-link to="/services">Услуги</router-link>
          </li>
          <li class="p-3 hover:scale-110 transition duration-700 ease-in-out">
            <router-link to="/price">Цены</router-link>
          </li>
          <li class="p-3 hover:scale-110 transition duration-700 ease-in-out">
            <router-link to="/about">Обо мне</router-link>
          </li>
          <li class="p-3 hover:scale-110 transition duration-700 ease-in-out">
            <router-link to="/contacts">Контакты</router-link>
          </li>
        </ul>
      <button class="block w-20 md:w-60 p-1 bg-slate-400 text-white rounded hover:scale-110 transition duration-700 ease-in-out drop-shadow-2xl">Получить консультацию</button>
    </nav>
  </section>
</template>

<script setup>
import {ref} from "vue";

const burgerToggle = ref(false)
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>