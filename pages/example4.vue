<script setup lang="ts">
import { ModalProps } from "@/types/modal";
import AlertModal from "@/src/modal/example4/AlertModal.vue";
import ErrorModal from "@/src/modal/example4/ErrorModal.vue";
import { useModalStack } from "@/composable/example4/useModalStack";

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
    closeFunc: modalStackStore.closeModal,
    logout: () => console.log("ログアウトされました。"),
  });
};
</script>

<template>
  <button @click="openErrorModal">エラーモーダルボタン</button>
  <button @click="openAlertModal">アラートモーダルボタン</button>
  <div
    v-for="(modalProps, index) in modalStackStore.modalStack"
    :style="{ zIndex: index + 1 }"
  >
    <component :is="modalMapping[modalProps.modalType]" v-bind="modalProps" />
  </div>
</template>
