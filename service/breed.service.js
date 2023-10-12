import api from "./api";

export const BreedService = {
	getBreedByName: async (name) => {
		const response = await api.get(`/breeds/search?q=${name}`);
		return response.data;
	},
	getBreeds: async (
		{ limit, order, page, sub_id, attach_image }
	) => {
		const response = await api.get("/breeds", {
			params: {
				limit,
				order,
				page,
				sub_id,
				attach_image,
			},
		});

		return returnValue === "headers" ? response.headers : response.data;
	},
};
