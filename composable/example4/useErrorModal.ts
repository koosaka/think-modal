import { ErrorModalProps } from "@/types/modal";

type ExportProps = {
  getErrorModalText: (errorCode: ErrorModalProps["errorCode"]) => {
    title: string;
    body: string;
  };
};

export const useErrorModal = (): ExportProps => {
  const errorCodeMessageMapping: Record<
    ErrorModalProps["errorCode"],
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

  const getErrorModalText = (errorCode: ErrorModalProps["errorCode"]) => {
    return {
      title: errorCodeMessageMapping[errorCode].title,
      body: errorCodeMessageMapping[errorCode].body,
    };
  };

  return { getErrorModalText };
};
