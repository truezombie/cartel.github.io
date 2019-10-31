// LIBRARIES
import React from "react";
import logo from "./logo.png";

export const Logo = React.memo(props => {
  return (
    <div className="has-text-white-ter has-text-centered is-flex is-aligned-center">
      <img src={logo} alt="cartel.in.ua" width={135} />
    </div>
  );
});
