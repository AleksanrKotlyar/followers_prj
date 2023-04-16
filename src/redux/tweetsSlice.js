import { createSlice } from "@reduxjs/toolkit";
import { fetchTweets, updateTweets } from "./tweetsOperations";
import { toast } from "react-hot-toast";

export const tweetsSlice = createSlice({
	name: "tweets",
	initialState: {
		items: [],
		isLoading: false,
		error: null,
	},
	extraReducers: {
		[fetchTweets.pending](state) {
			state.isLoading = true;
			toast.loading("Loading tweets...", {
				style: {
					background: "#c6b2f3",
				},
			});
		},
		[fetchTweets.fulfilled](state, action) {
			state.isLoading = false;
			state.error = null;
			state.items = action.payload;
			toast.dismiss();
		},
		[fetchTweets.rejected](state, action) {
			state.isLoading = false;
			state.error = action.payload;
			toast.dismiss();
		},

		[updateTweets.pending](state) {
			state.isLoading = true;
		},

		[updateTweets.fulfilled](state, action) {
			state.isLoading = false;
			state.error = null;
			const index = state.items.findIndex(
				(tweets) => tweets.id === action.payload.id
			);
			state.items.splice(index, 1, action.payload);
		},
		[updateTweets.rejected](state, action) {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});
