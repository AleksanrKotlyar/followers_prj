import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { tweetsSlice } from "./tweetsSlice";
import { filterSlice } from "./filterSlice";

import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const middleware = [
	...getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		},
	}),
];

const tweetsPersistConfig = {
	key: "tweets",
	storage,
	whitelist: ["items"],
};

export const store = configureStore({
	reducer: {
		tweets: persistReducer(tweetsPersistConfig, tweetsSlice.reducer),
		filter: filterSlice.reducer,
	},
	middleware,
	devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
