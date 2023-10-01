import { defineStore } from "pinia";
import { ModalProps } from "@/types/modal";

export const useModalStack = defineStore("modal-stack", () => {
  const modalStack = ref<ModalProps[]>([]);

  const openModal = (modalProps: ModalProps) => {
    modalStack.value.push(modalProps);
  };

  const closeModal = () => {
    modalStack.value.pop();
  };

  return { modalStack, openModal, closeModal };
});
