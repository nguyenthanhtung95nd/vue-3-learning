<template>
  <div class="upload-action">
    <ProgressRing :progress="item.progress" />
    <button @click="$emit('cancel')">C</button>
    <button @click="$emit('retry')">R</button>
    <button @click="$emit('locate')">L</button>
  </div>
</template>

<script>
import ProgressRing from "./ProgressRing.vue";
export default {
  emits: ["cancel", "retry", "locate"],
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  components: {
    ProgressRing,
  },
};
</script>

<style scoped>
.upload-controls,
.upload-action,
.action-cancel,
.action-canceled,
.action-complete,
.action-locate {
  display: flex;
  justify-content: center;
  align-items: center;
}

.upload-controls {
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.upload-controls:hover {
  background-color: #d9d9d9;
  fill: white;
}

.upload-controls button {
  background: transparent;
  padding: 0;
  border: none;
}

.upload-action,
.upload-controls button {
  width: 32px;
  height: 32px;
}

.action-cancel,
.action-canceled,
.action-complete,
.action-locate {
  width: 70%;
  height: 70%;
  border-radius: 50%;
}

.action-cancel {
  background-color: #333;
}

.action-canceled {
  background-color: #dc3545;
}

.action-complete {
  background-color: #28a745;
}

.action-locate {
  position: relative;
  background-color: #d9d9d9;
}

.upload-action svg {
  width: 70%;
  height: 70%;
  color: #fff;
}
</style>
