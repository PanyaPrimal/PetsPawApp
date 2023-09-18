import api from './api'

export const ImageService = {
	getImages: async (
		{
			size,
			mime_types,
			format,
			order,
			page,
			limit,
			category_ids,
			breed_ids,
			has_breeds,
		}
  ) => {
		const response = await api.get("/images/search", {
			params: {
				size,
				mime_types,
				format,
				order,
				page,
				limit,
				category_ids,
				breed_ids,
				has_breeds,
			},
		});
		return response.data;
	},
	getImageById: async (id) => {
		const response = await api.get(`/images/${id}`);
		return response.data;
	},
};
