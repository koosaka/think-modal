import { ModalProps } from "@/types/modal";

type ExportProps = {
  getModalTextFromErrorCode: (errorCode: ModalProps["errorCode"]) => {
    title: string;
    body: string;
  };
};

export const useModalText = (): ExportProps => {
  const errorCodeMessageMapping: Record<
    ModalProps["errorCode"],
    { title: string; body: string }
  > = {
    "404": {
      title: "404 Not Found",
      body: "ページが見つかりませんでした。",
    },
    "500": {
      title: "500 Internal Server Error",
      body: "サーバーでエラーが発生しました。",
    },
    other: {
      title: "エラー",
      body: "エラーが発生しました。",
    },
  };

  const getModalTextFromErrorCode = (errorCode: ModalProps["errorCode"]) => {
    return {
      title: errorCodeMessageMapping[errorCode].title,
      body: errorCodeMessageMapping[errorCode].body,
    };
  };

  return { getModalTextFromErrorCode };
};
