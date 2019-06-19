// LIBRARIES
import React, { useState } from "react";

export const Alert = React.memo(({ children, color }) => {
  const [toggleState, setToggleState] = useState(true);

  function toggle() {
    setToggleState(toggleState === false ? true : false);
  }

  return toggleState ? (
    <div className="container m-t-4">
      <div className={`notification ${color}`}>
        <button className="delete" onClick={toggle} />
        {children}
      </div>
    </div>
  ) : null;
});
