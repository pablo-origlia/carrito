import React, { Fragment } from 'react';

const Header = ({ titulo }) => {
  return (
    <Fragment>
      <h2>{titulo}</h2>
      <h4>Soy el header</h4>
    </Fragment>
  );
};

export default Header;
