<script setup lang="ts">
import { useModalStack, ModalType } from "@/composable/example3/useModalStack";
import { DefineComponent } from "vue";
import BaseModal from "@/src/modal/example3/BaseModal.vue";
import ErrorModal from "@/src/modal/example3/ErrorModal.vue";

const modalStackStore = useModalStack();
const modalMapping: Record<ModalType, DefineComponent<{}, {}, any>> = {
  error: ErrorModal,
  base: BaseModal,
};
</script>

<template>
  <div
    v-for="(modalType, index) in modalStackStore.modalStack"
    :style="{ zIndex: index + 1 }"
  >
    <component
      :is="modalMapping[modalType]"
      @close="modalStackStore.closeModal"
    />
  </div>
  <button @click="modalStackStore.openModal('base')">
    ベースモーダルを開く
  </button>
  <button @click="modalStackStore.openModal('error')">
    エラーモーダルを開く
  </button>
</template>
