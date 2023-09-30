import ServiceCalls from '../services/httpServiceCalls';

export const initiateRegister = async (data) => {
	try {
		let result = await ServiceCalls.get(`xchat/touku-registration/`, data, true);
		return result;
	} catch (err) {
		return {};
	}
};

export const initiatelogin = async (data) => {
	try {
		let result = await ServiceCalls.post(`node/api/auth/signIn`, data, false);
		return result;
	} catch (err) {
		return {};
	}
};

export const forgetPass = async (data) => {
	try {
		let result = await ServiceCalls.post(`node/api/auth/forgotPassword`, data, false);
		return result;
	} catch (err) {
		return {};
	}
};

export const getforgetOtp = async (data) => {
	try {
		let result = await ServiceCalls.post(`node/api/auth/verifyForgotPasswordOTP`, data, false);
		return result;
	} catch (err) {
		return {};
	}
};

export const resetPass = async (data) => {
	try {
		let result = await ServiceCalls.post(`node/api/auth/resetPassword`, data, true );
		return result;
	} catch (err) {
		return {};
	}
};