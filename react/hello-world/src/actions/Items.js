// Your action should be defined in here. Every action should be a function that
// only returns a plain object with a "type" property defined. Use constants to help
// pass this data along.
// Your action should be defined in here. Every action should be a function that
// only returns a plain object with a "type" property defined. Use constants to help
// pass this data along.
export const ADD_TODO = 'ADD_TODO'

export function addTodo(text) {
  return { type: ADD_TODO, text }
}
