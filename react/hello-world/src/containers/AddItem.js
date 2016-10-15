import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions'

let AddItem = ({ dispatch }) => {
  let input

  return (
    <div>
      <form className="form" onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addItem(input.value))
          input.value = ''
      }}>
      <input className="input" ref={node => {
          input = node
        }} type="text" />
      </form>
    </div>
  )
}
AddItem = connect()(AddItem)

export default AddItem
