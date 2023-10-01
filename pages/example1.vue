<script setup lang="ts">
import { ModalProps } from "@/types/modal";
import AlertModal from "@/src/modal/AlertModal.vue";
import ErrorModal from "@/src/modal/ErrorModal.vue";
import { useModalStack } from "@/composable/store/useModalStack";

const modalStackStore = useModalStack();
const modalMapping: Record<ModalProps["modalType"], any> = {
  error: ErrorModal,
  alert: AlertModal,
};

const openErrorModal = () => {
  modalStackStore.openModal({
    modalType: "error",
    errorCode: "404",
    closeFunc: modalStackStore.closeModal,
  });
};

const openAlertModal = () => {
  modalStackStore.openModal({
    modalType: "alert",
    errorCode: "500",
    closeFunc: modalStackStore.closeModal,
  });
};
</script>

<template>
  <button @click="openErrorModal">エラーモーダルボタン</button>
  <button @click="openAlertModal">アラートモーダルボタン</button>
  <div
    v-for="(modal, index) in modalStackStore.modalStack"
    :style="{ zIndex: index + 1 }"
  >
    <component :is="modalMapping[modal.modalType]" v-bind="modal" />
  </div>
</template>
