import {initiatelogin,forgetPass,getforgetOtp,resetPass} from "../../api/auth";
import { httpGet, httpPost } from '../../services/httpService';
import { toastr } from "react-redux-toastr";

export const StartLoading = () => {
    return {
        type: 'LOADING_START'
    };
};

export const StopLoading = () => {
    return {
        type: 'LOADING_STOP'
    };
};

export const RegisterSuccess = (data) => {
    return {
        type: 'REGISTER_DONE',
        payload: data,
    };
};

export const LOGIN_DONE = (data) => {
    return {
        type: 'LOGIN_DONE',
        payload: data,
    };
};

export const PROFILE_DATA = (data) => {
    return {
        type: 'PROFILE_DATA',
        payload: data,
    };
};


export const loginAction = (data) => async dispatch => {
	const response = await initiatelogin(data);
	if (Object.keys(response).length && response?.status == 200 && response?.data) {
        console.log("response",response)
        dispatch(PROFILE_DATA(response.data.data))
        dispatch(LOGIN_DONE(response.data.data.token));
        toastr.success('Xanalia', "Logged In")
        return response.data;
	} else {
        toastr.error('Xanalia', "Soemthing went wrong.")
    } 
};

export const logoutAction = (data) => async dispatch => {
        dispatch(PROFILE_DATA({}));
        dispatch(LOGIN_DONE(null));
        localStorage.clear()
        toastr.success('Xanalia', "Logged out")
};

export const forgetPassAction = (data) => async dispatch => {
	const response = await forgetPass(data);
	if (Object.keys(response).length && response?.status == 200 && response?.data) {
       return response.data
    }
};
export const getforgetOtpAction = (data) => async dispatch => {
	const response = await getforgetOtp({userName: data.userName , otp: data.otp});
	if (Object.keys(response).length && response?.status == 200 && response?.data) {
        console.log("getforgetOtpAction",response.data.data)
        dispatch(LOGIN_DONE(response.data.data.tempToken));
        dispatch(resetPassAction({password: data.password}));
        return response.data;
	} else {
        toastr.error('Reset Password', "Soemthing went wrong.")
    } 
};

export const resetPassAction = (data) => async dispatch => {
	const response = await resetPass(data);
	if (Object.keys(response).length && response?.status == 200 && response?.data) {
        toastr.success('Reset Password', "Password Updated")
        return response;
	} else {
        toastr.error('Reset Password', "Soemthing went wrong.")
    } 
};


export const checkEmailExist = (data) => (dispatch) => {
    return httpGet(`check-user-exist/?email=${data}`, false).then((response) => {
        if (response.data) {
            return Promise.resolve(response.data);
        }
    }, (error) => {

        return Promise.reject(error);
    });
}
export const checkUsernameExist = (data) => (dispatch) => {
    return httpGet(`check-user-exist/?username=${data}`, false).then((response) => {
        if (response.data) {
            return Promise.resolve(response.data)
        }
    }, (error) => {
        return Promise.reject(error)
    });
}
