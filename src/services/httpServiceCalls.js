import Store from '../redux/store';
import axios from 'axios';
import { environment } from '../environment';

class ServiceCalls {
	static headers = {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	};

	static get(path, data = null, sendToken = false) {
		let url = environment.apiUrl + path;
		const headers = sendToken
			? {
				...ServiceCalls.headers,
				Authorization: `JWT ${Store.getState().auth.user.token}`,
				// Authorization: `JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJ1c2VybmFtZSI6InV0a2Fyc2gucmF0aG9yZUBub2JvcmRlcnouY29tIiwiZXhwIjoxNjI5ODE3NTQ0LCJlbWFpbCI6InV0a2Fyc2gucmF0aG9yZUBub2JvcmRlcnouY29tIn0.GhyQuf1mBzGbhjMbXsIVVn7bsmNT3MNXGhFjBPSzUYI`,
			}
			: ServiceCalls.headers;
		return axios({ method: 'GET', url: url, headers: headers, })
			.then((res) => {
				return res;
			})
			.catch((err) => {
				return err.response;
			});
	}

	static post(path, data = null, sendToken = false) {
		let type;
		if(path === 'node/api/auth/resetPassword') {
			type = 'Bearer';
		} else {
			type = 'JWT';	
		}
		let url = environment.apiUrl + path;
		const headers = sendToken
			? {
				...ServiceCalls.headers,
				Authorization: `${type} ${Store.getState().auth.user.token}`,
				//Authorization: `${type} ${environment.token}`,

			}
			: ServiceCalls.headers;
		return axios({ method: 'POST', url: url, headers: headers, data: data, })
			.then((res) => {
				return res;
			})
			.catch((err) => {
				return err.response;
			});
	}

	static put(path, data = null, sendToken = false) {
		let url = environment.apiUrl + path;
		const headers = sendToken
			? {
				...ServiceCalls.headers,
				Authorization: `JWT ${Store.getState().auth.user.token}`,
				// Authorization: `JWT ${environment.token}`,
			}
			: ServiceCalls.headers;
		return axios({ method: 'PUT', url: url, headers: headers, data: data, })
			.then((res) => {
				return res;
			})
			.catch((err) => {
				return err.response;
			});
	}

	static patch(path, data = null, sendToken = false) {
		let url = environment.apiUrl + path;
		const headers = sendToken
			? {
				...ServiceCalls.headers,
				Authorization: `JWT ${Store.getState().auth.user.token}`,
				// Authorization: `JWT ${environment.token}`,
			}
			: ServiceCalls.headers;

		return axios({ method: 'PATCH', url: url, headers: headers, data: data,})
			.then((res) => {
				return res;
			})
			.catch((err) => {
				return err.response;
			});
	}

	static delete(path, data = null, sendToken = false) {
		let url = environment.apiUrl + path;
		const headers = sendToken
			? {
				...ServiceCalls.headers,
				Authorization: `JWT ${Store.getState().auth.user.token}`,
				// Authorization: `JWT ${environment.token}`,
			}
			: ServiceCalls.headers;
		return axios({ method: 'delete', url: url, headers: headers, data: data, })
			.then((res) => {
				return res;
			})
			.catch((err) => {
				return err.response;
			});
	}
}

export default ServiceCalls;
