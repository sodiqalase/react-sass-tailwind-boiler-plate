import axios from "axios";

function AxiosConfig() {
	const token = localStorage.getItem("Token Name");

	const instance = axios.create({
		baseURL: "base-url-provided-in-the-documentation",

		headers: {
			Authorization: token,
		},
	});

	return instance;
}

export const GlobalGetRequest = (url) => {
	return AxiosConfig().get(url);
};

export const GlobalPostRequest = (url, dataToSend) => {
	return AxiosConfig().post(url, dataToSend);
};
