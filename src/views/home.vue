<template>
  <div>
    <button @click="inc">+</button>
    <button @click="dec">-</button>Contador: {{ value }}
    <h3 />
    <button @click="loader(true)">Loader</button>
    <h3 />
    <Loader />
    <button @click="reset">reset state</button>
    <h3 />
    <button @click="reloj(true)">Iniciar</button>
    <button @click="reloj(false)">Detener</button>
    <Reloj />
  </div>
</template>
<script>
//import api from "../helper/axios";
//import apiAxios from "../helper/axios";
import { inject, toRef } from "vue";
import Loader from "../components/loader.vue";
import Reloj from "../components/reloj.vue";
//import state from "../state/state";
export default {
  components: {
    Loader,
    Reloj,
  },
  setup() {
    // const state = inject("state");
    //  lista.value.loading = false;
    const store = inject("state");
    const value = toRef(store.state, "count");

    // Replace toRef with the below will also produce the same result
    //const value = computed(() => store.state.count);
    const inc = () => {
      store.increment();
    };
    const dec = () => {
      store.decrement();
    };
    const loader = (val) => {
      store.loader(val);
    };
    const reset = () => {
      store.reset();
    };
    const reloj = (visible) => {
      store.visibleReloj(visible);
    };

    return { inc, reset, dec, value, loader, reloj };
  },
};
</script>
