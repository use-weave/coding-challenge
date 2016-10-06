import React, { PropTypes } from 'react';

const Item = ({children}) => (
  <li>
    {children}
  </li>
);

Item.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Item;
