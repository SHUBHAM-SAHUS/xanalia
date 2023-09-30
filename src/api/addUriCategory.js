import ServiceCalls from '../services/httpServiceCalls';

export const addUriCategory = async (data) => {
    // let url = process.env.REACT_APP_API_URL_ADMIN;
	try {
		let result = await ServiceCalls.post('blind-add-uri-category', data, false);
		return result;
	} catch (err) {
		return {};
	}
}; 