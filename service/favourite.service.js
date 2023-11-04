import api from "./api";

export const FavouriteService = {
	setFavourite: async ({ image_id, sub_id }) => {
    const data = { image_id };
    if (sub_id !== null) {
      data.sub_id = sub_id;
    }
		const response = await api.post("/favourites", data);
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
