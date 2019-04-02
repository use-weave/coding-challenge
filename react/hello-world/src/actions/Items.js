// Your action should be defined in here. Every action should be a function that
// only returns a plain object with a "type" property defined. Use constants to help
// pass this data along.

// one action to send a new item to state in store
// one action to get state and send it to the ItemsList component

export const ADD_ITEM = 'ADD_ITEM' 
export const GET_ITEMS = 'GET_ITEMS'

export const addItem = (item) => {
  return (dispatch) => {
    dispatch({
      type: ADD_ITEM,
      payload: item
    })
  }
}

export const getItems = () => {
  return (dispatch) => {
    dispatch({
      type: GET_ITEMS
    })
  }
}
