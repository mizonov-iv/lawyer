<template>
  <Navbar/>

<!--  <section class="container mx-auto h-screen px-40 border-2 flex flex-col justify-end">-->
<!--    <header>-->
<!--      <h1 class="text-7xl font-bold">Юридическая компания в Екатеринбурге</h1>-->
<!--      <p class="text-4xl mt-4">Обеспечим полную защиту ваших интересов</p>-->
<!--    </header>-->
<!--    <main>-->
<!--      <ul class="flex justify-between mt-10 mb-10">-->
<!--        <li class="w-1/8 text-center" v-for="item in numbers">-->
<!--          <p class="m-2">{{item.title}}</p>-->
<!--          <hr>-->
<!--          <p class="m-2">{{item.subtitle}}</p>-->
<!--        </li>-->
<!--      </ul>-->
<!--    </main>-->
<!--  </section>-->

<!--  <section class="container mx-auto px-40">-->
<!--    <ul class="flex justify-center">-->
<!--      <li class="mx-4 px-10 border-2" v-for="item in services">-->
<!--        <h2>{{item.title}}</h2>-->
<!--        <div>-->
<!--          <p>{{item.subtitle}}</p>-->
<!--        </div>-->
<!--      </li>-->
<!--    </ul>-->
<!--  </section>-->



<!--  <section class="text-center border-2">-->
<!--    <h2>Footer</h2>-->
<!--  </section>-->
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
