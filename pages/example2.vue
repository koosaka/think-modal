<script setup lang="ts">
import ErrorModal from "@/src/modal/example2/ErrorModal.vue";
import { useModal } from "@/composable/example2/useModal";
const { openModal } = useModal();
</script>

<template>
  <ErrorModal />
  <button @click="openModal">モーダルを開く</button>
</template>
