import axios from 'axios';
import { environment } from '../environment';

const getToken = () => {
    let sessionUserToken;
    try {
        sessionUserToken = sessionStorage.getItem('userToken');
        return sessionUserToken.replace(/['"]+/g, '');
    } catch (e) {

    }
};

export const httpPost = (url, data, sendToken) => {
    let authToken = "";
    if (sendToken) {
        authToken = 'Bearer ' + getToken();
    }
    return axios.post(environment.apiUrl + url, data, {
        headers: {
            'Authorization': authToken
        }
    });
};

export const httpPostForLogin = (url, data, sendToken) => {
    let authToken = "";
    if (sendToken) {
        authToken = "JWT " + getToken();
    }
    return axios.post(url, data, {
        headers: {
            Authorization: authToken,
        },
    });
};

export const httpGet = (url, sendToken) => {
    let authToken = "";
    if (sendToken) {
        authToken = 'JWT ' + getToken();
    }
    return axios.get(environment.apiUrl + url, {
        headers: {
            'Authorization': authToken //'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjEyMjY3MTI1LCJqdGkiOiI5NjIzYzMyNmFlOWM0NjA2ODUwN2I0MDE2ZGQ1YTRkMyIsInVzZXJfaWQiOjEwfQ.7Hc2eQBYLfdDrRBwHnTW49jLYjsnQq0Y7xNJHcxOWyg'
        }
    })
}

export const httpPut = (url, dataTosend, sendToken) => {
    let authToken = "";
    if (sendToken) {
        authToken = 'JWT ' + getToken();
    }
    return axios.put(environment.apiUrl + url, dataTosend, {
        headers: {
            'Authorization': authToken
        }
    });
}
export const httpDelete = (url, sendToken) => {
    let authToken = "";
    if (sendToken) {
        authToken = 'JWT ' + getToken();
    }
    return axios.delete(environment.apiUrl + url, {
        headers: {
            'Authorization': authToken
        }
    });
}
