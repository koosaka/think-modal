<script setup lang="ts">
import BaseModal from "@/src/modal/example1/BaseModal.vue";

const isErrorModalVisible = ref(false);

const openErrorModal = () => {
  isErrorModalVisible.value = true;
};
</script>

<template>
  <BaseModal v-if="isErrorModalVisible" @close="isErrorModalVisible = false" />
  <button @click="openErrorModal">モーダルを開く</button>
</template>
