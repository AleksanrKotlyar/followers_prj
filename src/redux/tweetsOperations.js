import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "services/axiosConfig";

const searchParams = new URLSearchParams({
	limit: 12,
});

export const fetchAllTweets = createAsyncThunk(
	"tweets/fetchAllTweets",
	async (_, { rejectWithValue }) => {
		try {
			const { data } = await api.get(`/tweets`);
			return data;
		} catch (err) {
			return rejectWithValue(err.message);
		}
	}
);
export const fetchTweets = createAsyncThunk(
	"tweets/fetchTweets",
	async (page = 1, { rejectWithValue }) => {
		try {
			const { data } = await api.get(`/tweets?${searchParams}&page=${page}`);
			return data;
		} catch (err) {
			return rejectWithValue(err.message);
		}
	}
);

export const updateTweets = createAsyncThunk(
	"tweets/updateTweets",
	async ({ id, following, followers }, { rejectWithValue }) => {
		try {
			const { data } = await api.put(`/tweets/${id}`, {
				following,
				followers,
			});

			return data;
		} catch (err) {
			console.log(err.message);
			return rejectWithValue(err.message);
		}
	}
);
