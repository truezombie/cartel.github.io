import React from 'react';
import { Trans } from 'react-i18next';

export const Footer = () => {
  return (
    <div className="container border-top p-t-4 has-text-grey-lighter">
      <div className="column">
        <Trans i18nKey="footer.text" />
      </div>

      <div className="p-t-2 p-b-2 border-top has-text-centered m-t-4">
        <span className="lh-1 is-size-7 is-uppercase">Cartel - </span>
        <span className="lh-1 is-size-7">in cash we trust</span>
      </div>
    </div>
  );
};
