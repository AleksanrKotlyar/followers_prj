import axios from "axios";

const BASE_URL = "https://64395f201b9a7dd5c965f65d.mockapi.io/api";
axios.defaults.baseURL = BASE_URL;

const api = axios.create({
	baseUrl: BASE_URL,
});

export { BASE_URL, api };
