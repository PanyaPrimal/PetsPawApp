import api from './api'

export const VoteService = {
	setVote: async ({ image_id, value, sub_id }) => {
    const data = { image_id, value };
    if (sub_id !== null) {
      data.sub_id = sub_id;
    }
		const response = await api.post("/votes", data);
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
