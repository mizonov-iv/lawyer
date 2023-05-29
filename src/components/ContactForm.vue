<template>
  <div class="flex flex-col border-2 md:w-2/4 h-fit p-8 mx-auto">

    <div class="flex flex-row justify-between">
      <h2 class="mb-4 font-medium text-lg">Оставьте свои контактные данные для связи</h2>
      <div class="cursor-pointer" @click="closeModal">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
    </div>

    <form class="flex flex-col justify-center content-center items-center" id="tg">
      <div class="w-full mt-2">
        <input
            class="block border-2 mx-auto w-full rounded p-2"
            type="text"
            placeholder="Введите имя..."
            v-model="form.name"
            id="validationUsername"
        >
      </div>
      <div class="w-full mt-2">
        <input
            class="block border-2 mx-auto w-full rounded p-2"
            type="tel"
            placeholder="Номер телефона"
            v-model="form.phone"
            v-mask="'+7(###)###-##-##'"
            id="validationPhone"
        >
      </div>
      <button
          class="block w-32 p-1 bg-slate-400 text-white rounded mt-4 hover:scale-110 duration-300 cursor-pointer"
          @click.prevent="sendMessage"
          :disabled="form.name === '' || form.phone === ''"
      >
        Отправить
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import {mask} from "vue-the-mask";

export default {
  data: () => ({
    form: {
      name: "",
      phone: ""
    }
  }),
  directives: {mask},
  methods: {
    closeModal() {
      this.$emit('closeContactModal')
    },
    sendMessage() {

      const TOKEN = "6207368071:AAHdNnzurp1MacKIVutRsTKpgaVnsLDxNC4";
      const CHAT_ID = "-1001949196636";
      const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;

      let message = `<b>Заявка с сайта:</b>\n`;
      message += `<b>Отправитель: </b> ${this.form.name} \n`;
      message += `<b>Телефон: </b> ${this.form.phone}`;

      axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
      });

      this.form.name = "";
      this.form.phone = "";

      this.closeModal();
    }
  }
}
</script>

<style scoped>

</style>