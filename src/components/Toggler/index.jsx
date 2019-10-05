// LIBRARIES
import React from "react";

export const Toggler = React.memo(
  ({ messageOpen, messageClose, isOpen, onToggle }) => {
    return (
      <div className="column m-t-4">
        <div className="has-text-centered">
          <span className="icon has-text-link">
            {isOpen ? (
              <i className="fas fa-chevron-up" />
            ) : (
              <i className="fas fa-chevron-down" />
            )}
          </span>
          <a className="has-text-grey-light is-size-5" onClick={onToggle}>
            {isOpen ? messageOpen : messageClose}
          </a>
        </div>
      </div>
    );
  }
);
