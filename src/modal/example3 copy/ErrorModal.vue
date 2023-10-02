<script setup lang="ts">
import { ModalProps } from "@/types/modal";
import { useModalText } from "@/composable/useModalText";

const props = defineProps<ModalProps>();
const modalMessage = useModalText();

const modalText = computed(() => {
  return modalMessage.getModalTextFromErrorCode(props.errorCode);
});
</script>

<template>
  <div class="modal">
    <div class="modal-content">
      <h4>{{ modalText.title }}</h4>
      <p>{{ modalText.body }}</p>
      <button @click="props.closeFunc">閉じる</button>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: #fff;
  padding: 20px;
  border-radius: 5px;
}
</style>
