import { Dispatch } from 'redux';
import { ItemAction, ItemActionTypes, ItemState } from '../../types/item';
import axios from 'axios';

export const fetchItem = () => {
  return async (dispatch: Dispatch<ItemAction>, getState: ItemState) => {
    try {
      dispatch({ type: ItemActionTypes.FETCH_ITEM });
      // const page = getState().item.page;
      const state = getState();
      const page = state.item.page;
      const url = `https://api.hnpwa.com/v0/item/${page}.json`;
      const res = await axios.get(url);
      //установлен для отображения надписи Загрузка страницы
      setTimeout(() => {
        dispatch({ type: ItemActionTypes.FETCH_ITEM_SUCCESS, payload: res.data });
      }, 1000);
    } catch (e) {
      dispatch({ type: ItemActionTypes.FETCH_ITEM_ERROR, payload: 'Ошибка при получении информации о новости ' });
    }
  };
};

export const setItemPage = (page: number): ItemAction => {
  return { type: ItemActionTypes.SET_ITEM_PAGE, payload: page };
};
