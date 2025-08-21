import React from "react";

const Modal = ({ id, title, children, actions }) => {
  return (
    <>
      <input type="checkbox" id={id} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          {title && <h3 className="font-bold text-lg">{title}</h3>}
          <div className="py-4">{children}</div>
          <div className="modal-action">
            {actions}
            <label htmlFor={id} className="btn">Close</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
