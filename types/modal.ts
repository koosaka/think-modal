export type ModalProps = {
  modalType: "error" | "alert";
  errorCode: "404" | "500" | "other";
  closeFunc?: () => void;
};
