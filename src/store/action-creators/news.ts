import { Dispatch } from 'redux';
import { NewsAction, NewsActionTypes } from '../../types/news';
import axios from 'axios';

const url = 'https://api.hnpwa.com/v0/news/1.json';

export const fetchNews = () => {
  return async (dispatch: Dispatch<NewsAction>) => {
    try {
      dispatch({ type: NewsActionTypes.FETCH_NEWS });
      const res = await axios.get(url);
      setTimeout(() => {
        dispatch({ type: NewsActionTypes.FETCH_NEWS_SUCCESS, payload: res.data });
      }, 1000);
    } catch (e) {
      dispatch({ type: NewsActionTypes.FETCH_NEWS_ERROR, payload: 'Ошибка при получении пользователей' });
    }
  };
};
