import { Dispatch } from 'redux';
import { ItemAction, ItemActionTypes } from '../../types/item';
import axios from 'axios';

export const fetchItem = (page: string | undefined) => {
  return async (dispatch: Dispatch<ItemAction>) => {
    try {
      dispatch({ type: ItemActionTypes.FETCH_ITEM });
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
