export interface News {
  id: number;
  title: string;
  points?: number | null;
  user?: string | null;
  time: number;
  time_ago: string;
  comments_count: number;
  type: string;
  url?: string;
  domain?: string;
}

export interface NewsState {
  news: News[];
  loading: boolean;
  error: null | string;
  page: number;
}

export enum NewsActionTypes {
  FETCH_NEWS = 'FETCH_NEWS',
  FETCH_NEWS_DELETE = 'FETCH_NEWS_DELETE',
  FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS',
  FETCH_NEWS_ERROR = 'FETCH_NEWS_ERROR',
  SET_NEWS_PAGE = 'SET_NEWS_PAGE',
}

interface FetchNewsAction {
  type: NewsActionTypes.FETCH_NEWS;
}

interface FetchNewsDeleteAction {
  type: NewsActionTypes.FETCH_NEWS_DELETE;
}

interface FetchNewsSuccessAction {
  type: NewsActionTypes.FETCH_NEWS_SUCCESS;
  payload: News[];
}

interface FetchNewsErrorAction {
  type: NewsActionTypes.FETCH_NEWS_ERROR;
  payload: string;
}

interface SetNewsPage {
  type: NewsActionTypes.SET_NEWS_PAGE;
  payload: number;
}

export type NewsAction =
  | FetchNewsAction
  | FetchNewsDeleteAction
  | FetchNewsSuccessAction
  | FetchNewsErrorAction
  | SetNewsPage;
