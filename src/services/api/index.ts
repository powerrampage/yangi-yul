import axios, { AxiosError } from "axios";

import { getLocalStorageValue, removeLocalStorageValue } from "@/utils/localStorageUtil";

export const requestNotAuth = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL
});

export const request = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	headers: {
		Authorization: "Bearer " + getLocalStorageValue("token")
	}
});

export const EImzoServerApi = axios.create({
	baseURL: process.env.NEXT_PUBLIC_EIMZO_SERVER_URL
});

[request].map((r) =>
	r.interceptors.request.use(
		(config) => {
      // @ts-ignore
			config.headers = {
				...config.headers,
				Authorization: "Bearer " + getLocalStorageValue("token")
			};
			return config;
		},
		(error) => Promise.reject(error)
	)
);

[request].map((r) =>
	r.interceptors.response.use(
		(config) => config,
		(error: AxiosError) => {
			if (error.response?.status === 401) {
				window.location.pathname = "/";
				removeLocalStorageValue("token");
			}
			throw error;
		}
	)
);
