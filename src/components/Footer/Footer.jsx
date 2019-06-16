// LIBRARIES
import React from "react";

export const Footer = React.memo(props => {
  return (
    <div className="container has-text-grey has-text-centered border-top m-t-4">
      <div className="p-t-2 p-b-2">
        <span className="lh-1 is-size-7 is-uppercase">Cartel - </span>
        <span className="lh-1 is-size-7">in cash we trust</span>
      </div>
    </div>
  );
});
