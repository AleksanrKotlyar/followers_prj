import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { fetchTweets } from "./tweetsOperations";

const tweets = createReducer([], {
	[fetchTweets.fulfilled]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
	[fetchTweets.pending]: () => true,
	[fetchTweets.fulfilled]: () => false,
	[fetchTweets.rejected]: () => false,
});

const error = createReducer(null, {
	[fetchTweets.pending]: () => null,
	[fetchTweets.rejected]: (_, action) => action.payload,
});

export default combineReducers({
	tweets,
	isLoading,
	error,
});
