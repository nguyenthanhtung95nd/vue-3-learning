<template>
  <div
    class="dropzone"
    @dragover.prevent="dragged = true"
    @dragleave.prevent="dragged = false"
    @drop.prevent="handleDrop"
    :class="{ 'dragged-over': dragged }"
  >
    <DragAndDropMessage v-show="showMessage" />
    <slot />
  </div>
</template>

<script>
import { ref } from "vue";
import DragAndDropMessage from "./DragAndDropMessage.vue";
export default {
  props: {
    showMessage: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    DragAndDropMessage,
  },
  setup(props, { emit }) {
    const dragged = ref(false);

    const handleDrop = (event) => {
      dragged.value = false;
      emit("files-dropped", event.dataTransfer.files);
    };

    return { dragged, handleDrop };
  },
  emits: ["files-dropped"],
};
</script>

<style scoped>
.dropzone {
  min-height: 80vh;
  border: 2px solid #ffff;
  background: #ffff;
  padding: 0.3rem;
}
.dragged-over {
  background: #e8f0fe;
  border: 2px solid blue;
}
</style>
