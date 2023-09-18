import api from './api'

export const VoteService = {
	setVote: async ({ image_id, sub_id, value }) => {
		const response = await api.post("/votes", {
			image_id,
			sub_id,
			value,
		});
		return response.data;
	},
	getVotes: async ({
		attach_image,
		sub_id,
		page,
		limit,
		order,
	}) => {
		const response = await api.get("/votes", {
			params: {
				attach_image,
				sub_id,
				page,
				limit,
				order,
			},
		});
		return response.data;
	},
};
