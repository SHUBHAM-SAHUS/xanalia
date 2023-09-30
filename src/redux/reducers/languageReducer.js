
const initialState = {
	language: "en",
};

const languageReducer = (state = initialState, action) => {
    const {type , payload} = action
	switch (type) {
		case 'SET_LANGUAGE': {
		  return { ...state, language: payload };
		}
		default:
		  return state;
	  }
};

export default languageReducer;
