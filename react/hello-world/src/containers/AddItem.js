import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions'

let AddItem = ({ dispatch }) => {
  let input

  return (
    <div>
      <form autoComplete="off" onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addItem(input.value))
          input.value = ''
      }}>
      <label htmlFor="input-item" ></label>

      <input id="input-item" type="text" ref={node => {
          input = node
          input.autofocus = true
      }} />
      </form>
    </div>
  )
}
AddItem = connect()(AddItem)

export default AddItem
