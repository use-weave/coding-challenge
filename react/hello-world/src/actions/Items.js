// Your action should be defined in here. Every action should be a function that
// only returns a plain object with a "type" property defined. Use constants to help
// pass this data along.

// one action to send a new item to state in store
// one action to get state and send it to the ItemsList component
// actions get called by the app and dispatch to the reducer

export const ADD_ITEM = 'ADD_ITEM'

export const addItem = (item) => {
  console.log('in actions')
  return {
    type: ADD_ITEM,
    payload: item
  }
}
