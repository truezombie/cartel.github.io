// LIBRARIES
import React from "react";

export const ModalWindow = React.memo(({ toggle, show, modalBody }) => {
  return (
    <div className={show ? "is-active modal" : "modal"}>
      <div className="modal-background" onClick={toggle} />
      <div className="modal-content">{modalBody}</div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={toggle}
      />
    </div>
  );
});
