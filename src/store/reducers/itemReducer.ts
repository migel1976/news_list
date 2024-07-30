import { ItemAction, ItemState, ItemActionTypes } from '../../types/item';

const initialState: ItemState = {
  item: {},
  loading: false,
  error: null,
  page: 1,
};

export const itemReducer = (state = initialState, action: ItemAction): ItemState => {
  switch (action.type) {
    case ItemActionTypes.FETCH_ITEM:
      return { ...state, loading: true };
    case ItemActionTypes.FETCH_ITEM_SUCCESS:
      return { ...state, loading: false, item: action.payload };
    case ItemActionTypes.FETCH_ITEM_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
