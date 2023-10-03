export type ErrorModalProps = {
  modalType: "error";
  errorCode: "404" | "500" | "other";
  closeFunc?: (() => void) | undefined;
};

export type AlertModalProps = {
  modalType: "alert";
  closeFunc?: (() => void) | undefined;
  logout: () => void;
};

export type ModalProps = ErrorModalProps | AlertModalProps;
