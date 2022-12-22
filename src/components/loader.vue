<template><div v-if="loader">Cargando.....</div></template>
<script>
import { inject, toRef } from "vue";
export default {
  setup() {
    const store = inject("state");
    const loader = toRef(store.state, "loader");
    return {
      loader,
    };
  },
};
</script>
