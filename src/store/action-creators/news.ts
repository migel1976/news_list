import { Dispatch } from 'redux';
import { NewsAction, NewsActionTypes } from '../../types/news';
import axios from 'axios';

export const fetchNews = () => {
  return async (dispatch: Dispatch<NewsAction>) => {
    try {
      dispatch({ type: NewsActionTypes.FETCH_NEWS_DELETE });
      for (let i = 1; i <= 10; i++) {
        dispatch({ type: NewsActionTypes.FETCH_NEWS });
        const url = `https://api.hnpwa.com/v0/newest/${i}.json`;
        const res = await axios.get(url);
        dispatch({ type: NewsActionTypes.FETCH_NEWS_SUCCESS, payload: res.data });
      }
    } catch (e) {
      dispatch({ type: NewsActionTypes.FETCH_NEWS_ERROR, payload: 'Ошибка при получении новостей' });
    }
  };
};
