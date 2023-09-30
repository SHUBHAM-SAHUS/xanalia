const initialState = {
	blindBoxList: [],
    singleBox: {},
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'BLIND_BOX_LIST': {
			// console.log("BLIND_BOX_LIST: action.payload",action.payload)
			return { ...state, blindBoxList: action.payload };
		}
		case 'SINGLE_BOX_DETAILS': {
            const foundBox = state.blindBoxList.find((box) => box.id === action.payload)
            // console.log("SINGLE_BOX_DETAILS: action.payload",action.payload)
            // console.log("SINGLE_BOX_DETAILS: foundBox",foundBox)
			return { ...state, singleBox: foundBox };
		}
        case 'ADD_NFT_IN_BOX': {
            let foundBox = state.blindBoxList.map((box) => {
                if(box.id === action.payload.id) {
                    box.pack_nfts.push(action.payload.data)
                }
            })
            // console.log("SINGLE_BOX_DETAILS: action.payload",foundBox)
			return { ...state, blindBoxList: foundBox};
		}
		default:
			return state;
	}
};

export default authReducer;
