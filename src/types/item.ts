export interface Comment {
  id: number;
  user: string;
  time: number;
  time_ago: string;
  type: string;
  content: string;
  comments: Comment[];
  comments_count: number;
  level: number;
  url: string;
  dead?: boolean;
}

export interface NewsItem {
  id: number;
  title: string;
  points: number | null;
  user: string | null;
  time: number;
  time_ago: string;
  content: string;
  deleted?: boolean;
  dead?: boolean;
  type: string;
  url?: string;
  domain?: string;
  comments: Comment[];
  level: number;
  comments_count: number;
}

export interface ItemState {
  item: NewsItem | Record<string, never>;
  loading: boolean;
  error: null | string;
  page: number;
}

export enum ItemActionTypes {
  FETCH_ITEM = 'FETCH_ITEM',
  FETCH_ITEM_SUCCESS = 'FETCH_ITEM_SUCCESS',
  FETCH_ITEM_ERROR = 'FETCH_ITEM_ERROR',
  SET_ITEM_PAGE = 'SET_ITEM_PAGE',
}

interface FetchItemAction {
  type: ItemActionTypes.FETCH_ITEM;
}

interface FetchItemSuccessAction {
  type: ItemActionTypes.FETCH_ITEM_SUCCESS;
  payload: NewsItem;
}

interface FetchItemErrorAction {
  type: ItemActionTypes.FETCH_ITEM_ERROR;
  payload: string;
}

interface SetItemPage {
  type: ItemActionTypes.SET_ITEM_PAGE;
  payload: number;
}

export type ItemAction = FetchItemAction | FetchItemSuccessAction | FetchItemErrorAction | SetItemPage;
