// Your action should be defined in here. Every action should be a function that
// only returns a plain object with a "type" property defined. Use constants to help
// pass this data along.
let itemId = 0
export const addItem = (text) => {
  return {
    type: 'ADD_ITEM',
    id: itemId++,
    text
  }
}
