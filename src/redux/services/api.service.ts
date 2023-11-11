import axios from 'axios';
import {BASE_URL, ENDPOINTS} from '../../environment';
import {showToastError} from '../../utils';
import {AuthActions} from '../reducer';
import {store} from '../store';

const apiService = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
console.log(BASE_URL);
apiService.interceptors.request.use(
  config => {
    const accessToken = store.getState().auth.accessToken;
    if (accessToken && config.url !== ENDPOINTS.REFRESH_TOKEN) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    config.withCredentials = true;
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
apiService.interceptors.response.use(
  response => {
    //showToastSuccess(`Call Api Successful  ${response.request.responseURL}`);
    return response;
  },
  async error => {
    const originalRequest = error.config;
    const refreshToken = store.getState().auth.refreshToken;

    if (
      refreshToken &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      const res = await apiService.post(ENDPOINTS.REFRESH_TOKEN, {
        refreshToken,
      });
      if (res.status === 200) {
        console.log(res);
        store.dispatch(AuthActions.refreshToken(res.data));
        console.log(res.data);
        return apiService(originalRequest);
      } else {
        store.dispatch(AuthActions.handleLogout());
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  },
);

export default apiService;