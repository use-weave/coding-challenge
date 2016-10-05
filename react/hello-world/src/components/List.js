import React, { PropTypes } from 'react';
import Item from './Item'

const List = ({items}) => (
  <ul>
    {
      items.map((item, index) =>
      <Item key={index}>
        {item}
      </Item>
    )
    }
  </ul>
);

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default List;
