// LIBRARIES
import React from "react";
// COMPONENTS
import { ModalWindow } from "../../../../components";
// CONSTANTS
import { GOOGLE_MAP_URL } from "../../constants";

export const ModalMap = React.memo(({ show, toggle }) => {
  return (
    <ModalWindow
      show={show}
      toggle={toggle}
      modalBody={
        <div style={{ minHeight: "500px" }}>
          <iframe
            title="Google map"
            src={GOOGLE_MAP_URL}
            frameBorder="0"
            style={{
              minWidth: "320px",
              minHeight: "500px",
              width: "100%",
              height: "500px"
            }}
          />
        </div>
      }
    />
  );
});
