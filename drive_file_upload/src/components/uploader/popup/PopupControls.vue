<template>
  <div class="popup-controls">
    <button
      class="rounded-button me-2"
      @click="(open = !open), $emit('toggle')"
    >
      <icon-chevron-down v-if="open" />
      <icon-chevron-up v-else />
    </button>
    <button class="rounded-button" @click="$emit('close')">
      <icon-times />
    </button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const open = ref(true);
    return { open };
  },
  emits: ["close", "toggle"],
};
</script>

<style scoped>
.rounded-button svg {
  fill: #f7f7f7;
}
.rounded-button {
  background: #212529;
}
.rounded-button:hover {
  background: #31363b;
}
</style>
