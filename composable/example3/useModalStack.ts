import { defineStore } from "pinia";

export type ModalType = "base" | "error";

export const useModalStack = defineStore("modal-stack", () => {
  const modalStack = ref<ModalType[]>([]);

  const openModal = (modalType: ModalType) => {
    modalStack.value.push(modalType);
  };

  const closeModal = () => {
    modalStack.value.pop();
  };

  return { modalStack, openModal, closeModal };
});
