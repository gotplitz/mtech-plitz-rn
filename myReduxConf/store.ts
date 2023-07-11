import { configureStore } from '@reduxjs/toolkit';

// Reducer
import rootReducer from '@myReduxConf/reducers';

// const store = configureStore({ rootReducer });
const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
