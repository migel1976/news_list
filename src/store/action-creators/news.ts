import { Dispatch } from 'redux';
import { NewsAction, NewsActionTypes } from '../../types/news';
import axios from 'axios';

export const fetchNews = (page: number = 1) => {
  return async (dispatch: Dispatch<NewsAction>) => {
    try {
      for (let i = 1; i <= 10; i++) {
        dispatch({ type: NewsActionTypes.FETCH_NEWS });
        // const url = `https://api.hnpwa.com/v0/newest/${page}.json`;
        const url = `https://api.hnpwa.com/v0/newest/${i}.json`;
        const res = await axios.get(url);
        dispatch({ type: NewsActionTypes.FETCH_NEWS_SUCCESS, payload: res.data });
        //установлен для отображения надписи Загрузка страницы
        // setTimeout(() => {
        //   dispatch({ type: NewsActionTypes.FETCH_NEWS_SUCCESS, payload: res.data });
        // }, 1000);
      }
    } catch (e) {
      dispatch({ type: NewsActionTypes.FETCH_NEWS_ERROR, payload: 'Ошибка при получении новостей' });
    }
  };
};

export const refreshNews = () => {
  return async (dispatch: Dispatch<NewsAction>) => {
    try {
      dispatch({ type: NewsActionTypes.FETCH_NEWS_DELETE });
      for (let i = 1; i <= 10; i++) {
        dispatch({ type: NewsActionTypes.FETCH_NEWS });
        const url = `https://api.hnpwa.com/v0/newest/${i}.json`;
        const res = await axios.get(url);
        dispatch({ type: NewsActionTypes.FETCH_NEWS_SUCCESS, payload: res.data });
        //установлен для отображения надписи Загрузка страницы
        // setTimeout(() => {
        //   dispatch({ type: NewsActionTypes.FETCH_NEWS_SUCCESS, payload: res.data });
        // }, 1000);
      }
    } catch (e) {
      dispatch({ type: NewsActionTypes.FETCH_NEWS_ERROR, payload: 'Ошибка при получении новостей' });
    }
  };
};

export const setNewsPage = (page: number): NewsAction => {
  return { type: NewsActionTypes.SET_NEWS_PAGE, payload: page };
};
