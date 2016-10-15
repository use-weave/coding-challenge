import * as actions from './index'

describe('item actions', () => {
  it('addItem should create ADD_ITEM action', () => {
    expect(actions.addItem('Use Redux')).toEqual({
      type: 'ADD_ITEM',
      id: 0,
      text: 'Use Redux'
    })
  })
})
