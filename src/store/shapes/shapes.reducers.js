const initialState = {
	data: undefined,
	filter: {
		shapes: [],
		colors: [],
	},
};

const shapesReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		default:
			return state;
	}
};

export default shapesReducer;
