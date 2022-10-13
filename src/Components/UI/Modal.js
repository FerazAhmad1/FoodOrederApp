import React from "react";
import ReactDom from "react-dom";
import { Fragment } from "react/cjs/react.development";
import classes from "./Modal.module.css";

const ModalOverlay = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};
const Backdrop = (props) => {
  return (
    <div className={classes.backdrop}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
      {ReactDom.createPortal(<Backdrop />, portalElement)}
    </Fragment>
  );
};
export default Modal;
