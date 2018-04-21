import React, { Component } from 'react'

function Form(props) {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        
        props.callback(input.value)
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Item
        </button>
      </form>
    </div>
  )
}

export default Form