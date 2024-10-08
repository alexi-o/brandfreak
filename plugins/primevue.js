import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import ToastService from "primevue/toastservice";
import Toast from "primevue/toast";
import Menubar from "primevue/menubar";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue);
  nuxtApp.vueApp.use(ToastService);
  nuxtApp.vueApp.component("Button", Button);
  nuxtApp.vueApp.component("InputText", InputText);
  nuxtApp.vueApp.component("Password", Password);
  nuxtApp.vueApp.component("Toast", Toast);
  nuxtApp.vueApp.component("Menubar", Menubar);
});
