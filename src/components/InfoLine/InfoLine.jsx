// LIBRARIES
import React from "react";

export const InfoLine = React.memo(({icon, children}) => {
  return (
    <p className="m-b-2">
    <span className="icon align-middle m-r-1">
      <i className={`fas ${icon}`} />
    </span>
    {children}
  </p>
  );
});
