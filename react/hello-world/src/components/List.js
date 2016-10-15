import React, { PropTypes } from 'react'
import Item from './Item'

const List = ({ items }) => (
  <ul>
    {items.map(item =>
      <Item
        key={item.id}
        {...item}
      />
    )}
  </ul>
)

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
}

export default List
