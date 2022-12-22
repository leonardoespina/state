<template>
  <div>{{ reloj }}</div>
</template>
<script>
import { inject, toRef } from "vue";
export default {
  setup() {
    const store = inject("state");
    const reloj = toRef(store.state, "temporizador");
    return {
      reloj,
    };
  },
};
</script>
