<template>
  <Navbar/>
  <section class="container mx-auto md:px-40 h-screen flex flex-col justify-start md:justify-start bg-[url('/img/3.png')] bg-image" id="main">
    <header class="mt-8">
      <h1 class="text-4xl	md:text-7xl font-bold text-center md:text-right text-slate-700">Доверенное лицо <br> в области права <br> в Екатеринбурге</h1>
    </header>
  </section>
  <hr class="m-4 border-2 w-1/2 mx-auto">
  <section class="container mx-auto px-4 md:px-40 mt-10" id="services">
    <header>
      <h2 class="m-4 font-bold text-xl	tracking-wide">Предмет деятельности:</h2>
    </header>
    <main>
      <ul class="text-justify">
        <li class="drop-shadow-md mb-2 bg-slate-200 hover:bg-slate-500 hover:text-white duration-200 cursor-pointer rounded-md p-3" v-for="item in servicesItems" :key="item.id">
          <p class="indent-6">{{item.name}}</p>
        </li>
      </ul>
    </main>
  </section>
  <hr class="m-4 border-2 w-1/2 mx-auto">
  <section class="container mx-auto px-4 md:px-40 mt-10" id="price">
    <header>
      <h2 class="m-4 font-bold text-xl tracking-wide">Цены:</h2>
    </header>
    <main>
      <ul class="text-justify">
        <li class="drop-shadow-md mb-2 bg-slate-200 hover:bg-slate-500 hover:text-white duration-200 cursor-pointer rounded-md p-6" v-for="item in priceItems" :key="item.id">
          <h3 class="mb-1 text-xl	font-bold	">{{item.title}}</h3>
          <hr class="mb-1">
          <p class="m-3 text-lg font-semibold italic">{{item.price}}</p>
          <hr class="mb-1">
          <p class="indent-6">{{item.subtitle}}</p>
          <hr class="mb-1">
          <p class="indent-6">{{item.additional}}</p>
        </li>
      </ul>
    </main>
  </section>
  <hr class="m-4 border-2 w-1/2 mx-auto mt-10">
  <section class="container mx-auto px-4 md:px-40" id="about">
    <header>
      <h2 class="m-4 font-bold text-xl tracking-wide">Обо мне:</h2>
    </header>
    <main>
      <div class="text-base">
        <p class="mb-4 indent-6">
          Приветствую Вас на моём сайте и давайте знакомиться.
        </p>
        <p class="mb-4 indent-6">
          Меня зовут Савчук Янина Константиновна. В 2002 году окончила Уральскую государственную юридическую академию (в настоящее время - Уральский государственный юридический университет), специальность - юриспруденция. Стаж работы по специальности - 18 лет. Имею опыт работы как в коммерческих организациях, так и в органах судебной власти, что позволяет мне оказывать квалифицированную юридическую помощь по широкому спектру правовых вопросов.
        </p>
        <p class="mb-4 indent-6">
          Форму нашего взаимодействия Вы определяете самостоятельно, от консультирования до полного юридического сопровождения по вопросу обращения. При этом, важно помнить, основой любого продуктивного взаимодействия являются открытость и доверие, что позволяет с самого начала правильно оценить сложившуюся спорную ситуацию, расставить правильные приоритеты и ориентиры в работе и, как следствие, получить положительный (желаемый) результат.
        </p>
        <p class="mb-4 indent-6">
          Со своей стороны гарантирую компетентность, индивидуальный подход в работе, порядочность.
        </p>
        <p class="mb-4 indent-6">
          Записаться на консультацию Вы можете, позвонив по контактному номеру телефона, либо оставить заявку-обращение на сайте.
        </p>
        <p class="mb-4 indent-6">
          Время проведения консультаций в рабочие дни с 09.00 до 20.00, в выходные и праздничные дни – по договоренности.
        </p>
      </div>
    </main>
  </section>
  <hr class="m-4 border-2 w-1/2 mx-auto">
  <Footer/>
</template>
<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import {ref} from "vue";
const servicesItems = ref([
  {
    name: "Трудовые споры (нарушение трудовых прав, незаконное увольнение, иные трудовые споры);"
  },
  {
    name: "Споры о защите чести, достоинства и деловой репутации;"
  },
  {
    name: "Споры, вытекающие из различных видов договоров (купля-продажа, поставка, займ, кредит, подряд, аренда, иные виды договоров);"
  },
  {
    name: "Семейные споры (расторжение брака, раздел совместно нажитого имущества, алиментные обязательства, определение места жительства и порядка общения с детьми, лишение родительских прав, ограничение в родительских правах, иные семейные споры);"
  },
  {
    name: "Установление (оспаривание) отцовства;"
  },
  {
    name: "Усыновление (удочерение) детей;"
  },
  {
    name: "Установление опеки и попечительства над детьми;"
  },
  {
    name: "Наследственные споры."
  },
]);
const priceItems = ref([
  {
    title: "Консультирование по правовым вопросам",
    price: "2000 рублей (не более 2-х часов), каждый последующий час оплачивается дополнительно в размере 500 рублей*",
    additional: "*При заключении договора возмездного оказания юридических услуг консультирование по правовым вопросам в рамках предмета спора входит в стоимость договора и не требует дополнительной оплаты.",
    subtitle: "Целями консультирования являются выяснение фактических обстоятельств дела по вопросу обращения Заказчика, исследование имеющихся в распоряжении Заказчика документов, иных доказательств относительно существующего спора, разъяснение в соответствии с действующим законодательством РФ прав и обязанностей Заказчика, оценка его правовых возможностей и определение порядка действий по защите его прав и интересов.",
  },
  {
    title: "Составление искового заявления",
    price: "5000 - 10 000 рублей (в зависимости от предмета иска и сложности спора)",
    subtitle: "Составление искового заявления включает себя консультирование Заказчика по правовым вопросам в рамках предмета спора, соблюдение досудебного порядка урегулирования спора (при необходимости), составление искового заявления с учётом требований действующего законодательства РФ, формирование полного комплекта документов для обращения в суд.",
  },
  {
    title: "Юридическое сопровождение спора",
    price: "20 000 рублей",
    additional: "*При судебном разбирательстве по делу свыше 6 (Шесть) месяцев представление интересов Заказчика в суде первой инстанции в каждом последующем судебном заседании оплачивается Заказчиком дополнительно в размере 3000 рублей.",
    subtitle: "В этом случае Заказчик получает комплекс юридических услуг-консультирование по правовым вопросам в рамках предмета спора, досудебное урегулирование спора в случаях, предусмотренных законом или договором, составление иска, подготовка процессуальных документов по делу в ходе судебного разбирательства, представление интересов Заказчика в суде первой инстанции в течение 6 (Шесть) месяцев с даты принятия искового заявления к производству суда.",
  },
  {
    title: "Представительство интересов Заказчика в суде",
    price: "5000 рублей за первое судебное заседание, 3000 рублей за каждое последующее судебное заседание",
    subtitle: "В том случае, если Вы обратились в суд самостоятельно и решили прибегнуть к помощи юриста после принятия искового заявления к производству суда или пришли к мнению о необходимости привлечь к участию в деле иного представителя, то данная форма взаимодействия актуальна именно для Вас.",
  },
  {
    title: "Обжалование судебных актов суда первой инстанции",
    price: "от 5000 рублей (в зависимости от категории и сложности дела)",
    subtitle: "Если Вы не согласны с решением суда первой инстанции, то Вам принадлежит право на его обжалование. Уверена, для защиты своих прав и законных интересов важно использовать все предусмотренные действующим законодательством РФ возможности.",
  },
])
</script>
