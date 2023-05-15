<template>
  <section class="container mx-auto px-40">
    <header>
      <h2 class="m-4 font-bold text-xl	tracking-wide	">Предмет деятельности</h2>
    </header>
    <main>
      <ul class="text-justify">
        <li class="drop-shadow-md mb-2 bg-slate-200 hover:bg-slate-500 hover:text-white duration-200 cursor-pointer rounded-md p-3" v-for="item in servicesItems" :key="item.id">
          <p>{{item.name}}</p>
        </li>
      </ul>
    </main>
  </section>
</template>

<script setup>
import {ref} from "vue";

const servicesItems = ref([
  {
    name: "Трудовые споры (нарушение трудовых прав, незаконное увольнение, иные трудовые споры);"
  },
  {
    name: "Споры о защите чести, достоинства и деловой репутации;"
  },
  {
    name: "Споры, вытекающие из договорного права (займ, кредит, неосновательное обогащение, подряд, иные виды договоров);"
  },
  {
    name: "Семейные споры (расторжение брака, раздел совместно нажитого имущества, алиментные обязательства, определение места жительства и порядка общения с детьми, лишение родительских прав, ограничение в родительских правах, иные семейные споры);"
  },
  {
    name: "Усыновление (удочерение) детей;"
  },
  {
    name: "Установление (оспаривание) отцовства;"
  },
  {
    name: "Установление опеки и попечительства над детьми;"
  },
  {
    name: "Наследственные споры."
  },
])
</script>