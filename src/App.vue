<template>
  <Navbar/>

  <section class="container mx-auto h-screen px-40 border-2 flex flex-col justify-end bg-[url('/img/3.JPG')] bg-image">
    <header>
      <h1 class="text-7xl font-bold">Юридическая компания в Екатеринбурге</h1>
      <p class="text-4xl mt-4">Обеспечим полную защиту ваших интересов</p>
    </header>
    <main>
      <ul class="flex justify-between mt-10 mb-10">
        <li class="w-1/8 text-center" v-for="item in numbers">
          <p class="m-2">{{item.title}}</p>
          <hr class="bg-slate-950	">
          <p class="m-2">{{item.subtitle}}</p>
        </li>
      </ul>
    </main>
  </section>

  <section class="container mx-auto px-40 mt-8 border-2	p-4">
    <ul class="flex justify-center	">
      <li class="mx-4 px-10	">
        <h2 class="m-2 text-lg uppercase text-neutral-500	">Услуги для физических лиц</h2>
        <div class="bg-[url('/img/services-to-individuals.webp')] bg-image pt-24 rounded-md h-32 w-80 hover:scale-110 duration-700">
          <p class="text-white text-xl ml-4">Банкротство физических лиц</p>
        </div>
      </li>
      <li class="mx-4 px-10	">
        <h2 class="m-2 text-lg uppercase text-neutral-500	">Услуги для юридических лиц</h2>
        <div class="bg-[url('/img/oficce.jpg')] bg-image pt-24 rounded-md h-32 w-80 hover:scale-110 duration-700">
          <p class="text-white text-xl ml-4">Ликвидация компаний</p>
        </div>
      </li>
    </ul>
  </section>

  <section>
    <header>
      <h2></h2>
    </header>
  </section>

  <section class="text-center border-2">
    <h2>Footer</h2>
  </section>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import {ref} from "vue";

const numbers = ref([
  {
    title: "17 000",
    subtitle: "Банкротов по РФ"
  },
  {
    title: "34",
    subtitle: "Филиала по РФ"
  },
  {
    title: "300",
    subtitle: "Юристов-экспертов в области банкротства"
  },
  {
    title: "50",
    subtitle: "Лучших арбитражных управляющих"
  }
])

const services = ref([
  {
    title: "Услуги для физических лиц",
    subtitle: "Банкротство физических лиц"
  },
  {
    title: "Услуги для юридических лиц",
    subtitle: "Ликвидация компаний"
  },
])
</script>
