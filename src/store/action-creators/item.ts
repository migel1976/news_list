import { Dispatch } from 'redux';
import { ItemAction, ItemActionTypes } from '../../types/item';
import axios from 'axios';

export const fetchItem = () => {
  return async (dispatch: Dispatch<ItemAction>, getState) => {
    try {
      dispatch({ type: ItemActionTypes.FETCH_ITEM });
      //   console.log(getState().item);
      console.log('getState().item', getState().item);
      const page = getState().item.page;
      const url = `https://api.hnpwa.com/v0/item/${page}.json`;
      const res = await axios.get(url);
      console.log('res.data is ', res.data);
      dispatch({ type: ItemActionTypes.FETCH_ITEM_SUCCESS, payload: res.data });
    } catch (e) {
      dispatch({ type: ItemActionTypes.FETCH_ITEM_ERROR, payload: 'Ошибка при получении информации о новости ' });
    }
  };
};

export const setItemPage = (page: number): ItemAction => {
  return { type: ItemActionTypes.SET_ITEM_PAGE, payload: page };
};
