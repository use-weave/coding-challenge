import React from 'react'

const Item = ({ Items }) => {
  // iteratively displays the text of each item in the array passed from props
  return(
    <div className="Items">
      {Items.length > 0 && Items.map((item, id) => 
      <div key={id}>{item}</div>
      )}
    </div>
  )
}

export default Item