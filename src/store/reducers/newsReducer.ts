import { NewsState, NewsAction, NewsActionTypes } from '../../types/news';

const initialState: NewsState = {
  news: [],
  loading: false,
  error: null,
};

export const newsReducer = (state = initialState, action: NewsAction): NewsState => {
  switch (action.type) {
    case NewsActionTypes.FETCH_NEWS:
      return { ...state, loading: true, error: null, news: [] };

    case NewsActionTypes.FETCH_NEWS_SUCCESS:
      return { ...state, loading: false, error: null, news: action.payload };

    case NewsActionTypes.FETCH_NEWS_ERROR:
      return { ...state, loading: false, error: action.payload, news: [] };

    default:
      return state;
  }
};
