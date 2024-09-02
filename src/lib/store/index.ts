import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistConfig } from "redux-persist";

import { apiSlice } from "@/lib/store/apiSlice";
import searchReducer from "./searchSlice";

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  search: searchReducer,
});

const persistConfig : PersistConfig<ReturnType<typeof rootReducer>> = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ["search"],
  blacklist: [apiSlice.reducerPath]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = () =>
  configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(apiSlice.middleware),
  });

export const store = makeStore();
export const persistor = persistStore(store);

setupListeners(store.dispatch)

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
