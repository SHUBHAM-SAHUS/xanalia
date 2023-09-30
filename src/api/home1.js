import ServiceCalls from '../services/httpServiceCalls';


export const getCardList = async (page) => {
	try {
		//chat/api/get-timeline/    
		let result = await ServiceCalls.get(`chat/api/get-timeline/?page=${page}`,null,  true);
		return result;
	} catch (err) {
		return {};
	}
}; 