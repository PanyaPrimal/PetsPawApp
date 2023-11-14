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
  uploadImage: async (file, subId) => {
		const formData = new FormData();
		formData.append("file", file);
		formData.append("sub_id", subId || "");
		const response = await api.post(
			"/images/upload",
			formData
		);
		return response.data;
	},
};
