<script setup lang="ts">
import { useModal } from "@/composable/example2/useModal";
import BaseModal from "@/src/modal/example2/BaseModal.vue";
const { isVisible, closeModal } = useModal();
</script>

<template>
  <BaseModal v-if="isVisible" @close="closeModal" />
</template>
