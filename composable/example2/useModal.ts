export const useModal = () => {
  const isVisible = useState<boolean>("example2-use-modal", () => false);
  const openModal = () => {
    isVisible.value = true;
  };
  const closeModal = () => {
    isVisible.value = false;
  };

  return { isVisible, openModal, closeModal };
};
