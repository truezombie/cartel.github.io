// LIBRARIES
import React from "react";

export const Footer = React.memo(props => {
  return (
    <div className="container m-t-2">
      <div className="columns">
        <div className="column is-10 is-offset-1 border-top p-l-0 p-r-0 has-text-grey has-text-centered">
          <span className="lh-1 is-size-7 is-uppercase">Cartel - </span>
          <span className="lh-1 is-size-7">in cash we trust</span>
        </div>
      </div>
    </div>
  );
});
