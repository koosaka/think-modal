<script setup lang="ts">
import { AlertModalProps } from "@/types/modal";

const props = defineProps<AlertModalProps>();
</script>

<template>
  <div class="modal">
    <div class="modal-content">
      <h4>アラートモーダルタイトル</h4>
      <p>アラートモーダルテキスト</p>
      <button @click="props.closeFunc">閉じる</button>
      <button @click="props.logout">ログアウト</button>
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
