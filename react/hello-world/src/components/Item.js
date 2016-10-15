import React, { PropTypes } from 'react'

const Item = ({ text }) => (
  <li>
    {text}
  </li>
)

Item.propTypes = {
  text: PropTypes.string.isRequired
}

export default Item
