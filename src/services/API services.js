import { api } from "services/axiosConfig";

const searchParams = new URLSearchParams({
	limit: 12,
});

export const fetchAllTweets = async () => {
	try {
		const { data } = await api.get(`/tweets`);

		return data;
	} catch (err) {
		return err.message;
	}
};

export const fetchTweets = async (page = 1) => {
	try {
		const { data } = await api.get(`/tweets?${searchParams}&page=${page}`);

		return data;
	} catch (err) {
		return err.message;
	}
};

export const updateTweets = async ({ id, following, followers }) => {
	try {
		const { data } = await api.put(`/tweets/${id}`, {
			following,
			followers,
		});

		return data;
	} catch (err) {
		return err.message;
	}
};
