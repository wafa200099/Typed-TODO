import React, {
  useEffect,
  useRef,
  FC,
  MutableRefObject,
  PropsWithChildren,
} from "react";
import { createPortal } from "react-dom";
import "../components/Modal.css";

const Modal: FC<PropsWithChildren> = ({ children }) => {
  const elementRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  if (!elementRef.current) {
    elementRef.current = document.createElement("div");
  }
  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    if (!modalRoot || !elementRef.current) {
      return;
    }
    modalRoot.append(elementRef.current);
    return () => {
      if (elementRef.current) modalRoot.removeChild(elementRef.current);
    };
  }, []);
  return createPortal(
    <div className="modal">{children} </div>,
    elementRef.current
  );
};

export default Modal;
