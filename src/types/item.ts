export interface ItemState {
  item: any[];
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
  payload: any[];
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
