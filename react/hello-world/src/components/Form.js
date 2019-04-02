import React from 'react'

function Form (props) {
  let { Submit } = props

  const handleSubmit = (event) => {
    event.preventDefault()
    Submit(event.target.newItem.value)
  }

  return(
      <form onSubmit={(e)=>{handleSubmit(e)}}>
        <label htmlFor="newItem">
          Put words here!
        </label>
        <input type="text" id="newItem"/>
        <button>Do Words</button>
      </form>
  )
}

export default Form