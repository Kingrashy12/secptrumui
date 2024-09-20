import React, { useEffect, useState } from "react";
import { ModalProvider } from "@/context/useModal";
import Backdrop from "../Backdrop";

type ModalType = {
  /**
   * Whether the component is open or not.
   */
  open: boolean;

  /**
   * Function to be called when the component is requested to close.
   */
  onClose: () => void;

  /**
   * Optional additional class names to be applied to the component.
   */
  className?: string;

  /**
   * Optional custom styles to be applied to the component.
   */
  style?: React.CSSProperties;

  /**
   * Content to be rendered inside the component.
   */
  children: React.ReactNode;
  /**
   * Determines the stack order of the backdrop, ensuring it appears above other content but behind interactive elements.
   */
  zIndex?: number;
  /**
   * Prevents the modal from closing if an action is in progress.
   * When set to `true`, the modal will remain open and cannot be closed
   * until the ongoing action completes.
   * Useful for preventing accidental closure during important tasks or loading states.
   */
  preventClose?: boolean;
};

/**
 * This component renders a modal dialog that wraps the `ModalPanel` component
 * with customizable content and behaviors.
 *
 * Props:
 * - `open`: Whether the modal is currently open or not.
 * - `onClose`: Callback function to be called when the modal requests to close.
 * - `className`: Optional additional class names to be applied to the modal.
 * - `styles`: Optional custom styles to be applied to the modal.
 *
 * Example:
 *
 * ```
 * <Modal open onClose={()=>setOpenModal(false)}>
 *      <ModalPanel align='vertical'>
 *       <h1>A modal</h1>
 *    </ModalPanel>
 * </Modal>
 * ```
 */

const Modal = ({
  onClose,
  open,
  children,
  className,
  style,
  preventClose,
}: ModalType) => {
  return (
    <ModalProvider>
      <Backdrop
        style={style}
        className={className}
        onClose={onClose}
        open={open}
        preventClose={preventClose}
      >
        {children}
      </Backdrop>
    </ModalProvider>
  );
};

export default Modal;
