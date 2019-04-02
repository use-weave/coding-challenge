// one action to send a new item to state in store
// actions get called by the app and dispatch to the reducer

export const ADD_ITEM = 'ADD_ITEM'

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item
  }
}
