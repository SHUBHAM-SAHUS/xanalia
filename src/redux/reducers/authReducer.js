const initialState = {
	user: {},
	token: null,
	loading: false,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'PROFILE_DATA': {
			console.log("user: action.payload",action.payload)
			return { ...state, user: action.payload };
		}
		case 'LOADING_START': {
			return { ...state, loading: true };
		}
		case 'LOADING_STOP': {
			return { ...state, loading: false };
		}
		case 'REGISTER_DONE':
		case 'LOGIN_DONE': {
			console.log("token: action.payload",action.payload)
			return { ...state, token: action.payload };
		}
		default:
			return state;
	}
};

export default authReducer;
