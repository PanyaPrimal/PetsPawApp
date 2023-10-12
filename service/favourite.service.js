import api from "./api";

export const FavouriteService = {
	setFavourite: async ({ image_id, sub_id }) => {
		const response = await api.post("/favourites", {
			image_id,
			sub_id,
		});
		return response.data;
	},
	removeFavourite: async ({ favourite_id }) => {
		const response = await api.delete(
			`/favourites/${favourite_id}`
		);
		return response.data;
	},
	getFavourites: async ({ sub_id }) => {
		const response = await api.get("/favourites", {
			params: { sub_id },
		});
		return response.data;
	},
};
