import React, { useEffect, useRef, useState } from "react";
// import {
//   CloseIcon,
//   ContentWrap,
//   StyledToast,
//   ToastContent,
// } from "../../styles/styled";
// import Icon from "../Icon/Icon";
import { IoCloseCircleOutline } from "react-icons/io5";
import { RiErrorWarningFill, RiInformationFill } from "react-icons/ri";
import { FaCircleCheck } from "react-icons/fa6";
import { TiWarning } from "react-icons/ti";
import { localColors } from "@/styles/global";
import { Icon } from "secptrum-ui";
import { generateId } from "@/utils";
import {
  CloseIcon,
  ContentWrap,
  StyledToast,
  ToastContent,
} from "@/styles/test/feedback/styled";

// Toast types
export type ToastVariant = "info" | "success" | "error" | "warning";

// Toast positions
export type ToastPositionType =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

// Toast options
export type ToastOptionsType = {
  position?: ToastPositionType;
  className?: string;
  transition?: "dropIn" | "slideIn" | "popIn" | "walkIn";
};

// Toast notification
type ToastNotification = {
  id: string;
  message: string;
  position?: ToastPositionType;
  className?: string;
  transition?: ToastOptionsType["transition"];
  type: ToastVariant;
};

export type ToastTransitionType = "dropIn" | "slideIn" | "popIn" | "walkIn";

export type ToastType = {
  [key in ToastVariant]: (
    message: string,
    options?: {
      position?: ToastPositionType;
      className?: string;
      transition?: ToastTransitionType;
    }
  ) => void;
};

let toast: ToastType;

const Toast = () => {
  const [toasts, setToasts] = useState<ToastNotification[]>([]);
  const toastTimeouts = useRef<{ [key: string]: NodeJS.Timeout }>({});

  // Show toast
  const show = (newToast: ToastNotification, duration: number = 4000) => {
    setToasts((prevToasts) => [...prevToasts, newToast]);

    // Set timeout to remove toast
    const timeoutId = setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((t) => t.id !== newToast.id));
      delete toastTimeouts.current[newToast.id];
    }, duration);

    // Store timeout ID
    toastTimeouts.current[newToast.id] = timeoutId;
  };

  // Remove toast
  const removeToast = (toast: ToastNotification) => {
    setToasts((prev) => {
      const updatedToasts = prev.filter((t) => t.id !== toast.id);
      return updatedToasts;
    });
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      Object.values(toastTimeouts.current).forEach(clearTimeout);
    };
  }, []);

  // Get label
  const getLabel = (type: ToastVariant) => {
    switch (type) {
      case "info":
        return "Information";
      case "error":
        return "Error";
      case "success":
        return "Success";
      case "warning":
        return "Warning";
    }
  };

  // Get icon color
  const getIconColor = (type: ToastVariant) => {
    switch (type) {
      case "info":
        return localColors.blue[500];
      case "error":
        return localColors.red[500];
      case "success":
        return localColors.green[500];
      case "warning":
        return localColors.yellow[500];
    }
  };

  // Get icon
  const getIcon = (type: ToastVariant) => {
    switch (type) {
      case "info":
        return RiInformationFill;
      case "error":
        return RiErrorWarningFill;
      case "success":
        return FaCircleCheck;
      case "warning":
        return TiWarning;
    }
  };

  // Toast API
  toast = {
    info: (msg: string, options?: ToastOptionsType) =>
      show({ id: generateId(), message: msg, type: "info", ...options }),
    error: (msg: string, options?: ToastOptionsType) =>
      show({ id: generateId(), message: msg, type: "error", ...options }),
    success: (msg: string, options?: ToastOptionsType) =>
      show({ id: generateId(), message: msg, type: "success", ...options }),
    warning: (msg: string, options?: ToastOptionsType) =>
      show({ id: generateId(), message: msg, type: "warning", ...options }),
  };

  return (
    <>
      {toasts.map((toast) => (
        <StyledToast
          key={toast.id}
          position={toast.position || "top-right"}
          className={toast.className}
          transition={toast.transition}
          show-toast={true}
        >
          <ContentWrap>
            <Icon
              icon={getIcon(toast.type)}
              color={getIconColor(toast.type)}
              size={20}
            />
            <ToastContent direction="column">
              <div className="header">{getLabel(toast.type)}</div>
              <span>{toast.message}</span>
            </ToastContent>
          </ContentWrap>
          <CloseIcon type={toast.type} onClick={() => removeToast(toast)}>
            <IoCloseCircleOutline size={30} color="black" />
          </CloseIcon>
        </StyledToast>
      ))}
    </>
  );
};

export default Toast;

export { toast };
