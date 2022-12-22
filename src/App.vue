<template>
  <router-view />
</template>
<script>
import { provide } from "vue";
import state from "./state/state";

export default {
  setup() {
    provide("state", state);
  },
};
</script>
