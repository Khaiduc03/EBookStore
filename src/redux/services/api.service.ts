import axios from 'axios';
import {BASE_URL, ENDPOINTS} from '../../environment';
import {AuthActions} from '../reducer';
import {store} from '../store';

const apiService = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiService.interceptors.request.use(
  config => {
    const accessToken = store.getState().auth.accessToken;
    //console.log('aceess token', accessToken);
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
    return response;
  },
  async error => {
    const originalRequest = error.config;
    const refreshToken = store.getState().auth.refreshToken;

    if (error.response.status === 401) {
      originalRequest._retry = true;
      const res = await apiService.post(ENDPOINTS.REFRESH_TOKEN, {
        refreshToken: refreshToken,
      });
      if (res.status === 201) {
        const {access_token, refresh_token} = res['data'].data;
        store.dispatch(
          AuthActions.refreshToken({
            accessToken: access_token,
            refreshToken: refresh_token,
          }),
        );
        return apiService(originalRequest);
      }
    } else {
      store.dispatch(AuthActions.handleLogout());
      return Promise.reject(error);
    }

    return Promise.reject(error);
  },
);

export default apiService;
