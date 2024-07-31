import { combineReducers } from 'redux';
import { newsReducer } from './newsReducer';
import { itemReducer } from './itemReducer';

export const rootReducer = combineReducers({
  news: newsReducer,
  item: itemReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
