import React from 'react'

const Item = ({ Items }) => {
  // displays the text of each item
  
  return(

      <div className="Items">
        {Items.length > 0 && Items.map((item, id) => 
        <div key={id}>{item}</div>
        )}
      </div>
  )
}

export default Item