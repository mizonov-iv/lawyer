<template>
  <section class="container mx-auto px-4 md:px-5 lg:px-4 text-center py-4">
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
      <a href="/" class="text-xl">
        <img class="w-32" src="/logo.png" alt="logo">
      </a>
        <ul
            class=" w-3/4 lg:w-6/12 h-screen py-10 sm:py-0 md:h-fit absolute top-0 left-0 md:static md:flex z-10 bg-gray-300 sm:bg-inherit"
            :class="burgerToggle ? 'block' : 'hidden'"
        >
          <li class="p-3 hover:scale-110 transition duration-700 ease-in-out">
            <a href="/">Главная</a>
          </li>
          <hr class="w-4 bg-slate-600	mx-auto border-2 sm:hidden">
          <li class="p-3 hover:scale-110 transition duration-700 ease-in-out">
            <a href="#services">Перечень услуг</a>
          </li>
          <hr class="w-4 bg-slate-600	mx-auto border-2 sm:hidden">
          <li class="p-3 hover:scale-110 transition duration-700 ease-in-out">
            <a href="#price">Цены</a>
          </li>
          <hr class="w-4 bg-slate-600	mx-auto border-2 sm:hidden">
          <li class="p-3 hover:scale-110 transition duration-700 ease-in-out">
            <a href="#about">Обо мне</a>
          </li>
          <hr class="w-4 bg-slate-600	mx-auto border-2 sm:hidden">
          <li class="p-3 hover:scale-110 transition duration-700 ease-in-out">
            <a href="#footer">Контакты</a>
          </li>
        </ul>
      <button
          class="block w-32 md:w-60 md:p-0 p-1 bg-slate-400 text-white rounded hover:scale-110 transition duration-700 ease-in-out drop-shadow-2xl"
          @click="openContactModal"
      >
        Получить консультацию
      </button>
    </nav>
  </section>

  <!-- CONTACT MODAL -->
  <div
      class="h-screen w-screen flex flex-col justify-center	content-center px-4"
      v-if="contactModalIsOpen"
  >
    <ContactForm
        @closeContactModal="closeContactModal"
    />
  </div>

</template>

<script setup>
import {ref} from "vue";
import ContactForm from "./ContactForm.vue";

const burgerToggle = ref(false)

const contactModalIsOpen = ref(false)

const openContactModal = () => {
  contactModalIsOpen.value = true
}

const closeContactModal = () => {
  contactModalIsOpen.value = false
}
</script>