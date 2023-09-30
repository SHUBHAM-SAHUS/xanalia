import { addUriCategory } from "../../api/addUriCategory";
import { toastr } from "react-redux-toastr";

export const ADD_URI_CATEGORY = (data) => {
    return {
        type: 'ADD_URI_CATEGORY',
        payload: data,
    };
};

export const addUriCategoryAction = (data) => async dispatch => {
	const response = await addUriCategory(data);
	if (Object?.keys(response)?.length && response?.status == 200 && response?.data) {
        console.log("response",response)
        dispatch(ADD_URI_CATEGORY(response));
        toastr.success('Xanalia', "Added")
        return response?.data;
	} else {
        toastr.error('Xanalia', "Soemthing went wrong.")
    } 
};