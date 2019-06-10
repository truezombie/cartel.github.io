// LIBRARIES
import React from "react";

export const Logo = React.memo(props => {
  return (
    <div className="has-text-centered has-text-white-ter">
      <h1 className="is-uppercase logo-font is-size-1 lh-1">cartel</h1>
      <p className="logo-font is-size-6 lh-1">in cash we trust</p>
    </div>
  );
});
