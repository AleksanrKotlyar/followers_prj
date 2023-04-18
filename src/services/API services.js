import { api } from "services/axiosConfig";

const searchParams = new URLSearchParams({
	limit: 12,
});

export const fetchAllTweets = async (filter) => {
	try {
		if (filter === true || filter === false) {
			const searchParams = new URLSearchParams({
				following: filter,
			});
			const { data } = await api.get(`/tweets?${searchParams}`);
			searchParams.delete("following");
			return data;
		} else {
			const { data } = await api.get(`/tweets`);
			return data;
		}
	} catch (err) {
		return err.message;
	}
};

export const fetchTweets = async (page = 1, filter) => {
	if (filter === true || filter === false) {
		searchParams.set("following", filter);
	}
	try {
		const { data } = await api.get(`/tweets?${searchParams}&page=${page}`);
		searchParams.delete("following");
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
