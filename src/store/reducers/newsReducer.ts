// import { act } from 'react';
import { NewsState, NewsAction, NewsActionTypes } from '../../types/news';

const initialState: NewsState = {
  news: [],
  loading: false,
  error: null,
  page: 1,
};

export const newsReducer = (state = initialState, action: NewsAction): NewsState => {
  switch (action.type) {
    case NewsActionTypes.FETCH_NEWS:
      return { ...state, loading: true, news: [] };

    case NewsActionTypes.FETCH_NEWS_SUCCESS:
      action.payload.sort(function (a, b) {
        return new Date(b.time * 1000).valueOf() - new Date(a.time * 1000).valueOf();
      });
      return { ...state, loading: false, news: [...state.news, ...action.payload] };

    case NewsActionTypes.FETCH_NEWS_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
