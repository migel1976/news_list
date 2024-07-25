import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { rootReducer } from './reducers';
import { thunk } from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { composeWithDevTools } from '@redux-devtools/extension';

// export const store = createStore(rootReducer, applyMiddleware(thunk));
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
