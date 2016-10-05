import * as types from '../constants/ActionTypes';

export const streamCurrentItem = (item) => ({
  item,
  type: types.STREAM_CURRENT_ITEM,
});

export const addItemToList = (item) => ({
  item,
  type: types.ADD_ITEM_TO_LIST,
});
