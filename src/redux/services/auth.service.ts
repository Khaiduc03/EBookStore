import { Endpoints } from '../../environment';
import { LoginPayload } from '../types';
import apiService from './api.service';


export class AuthService {
  static async handleLogin(payload: LoginPayload) {
    return await apiService.post(Endpoints.LOGIN_ENDPOINT, payload);
  }
  static async handleCreateAccount(
    payload: Omit<LoginPayload, 'device_token'| 'idToken'>
  ) {
    return await apiService.post(Endpoints.CREATE_ACCOUNT_ENDPOINT, payload);
  }
  static async hanleGGLogin(payload: Omit<LoginPayload, 'password' | 'email'>) {
    console.log(Endpoints.SIGN_IN_GOOGLE)
    return await apiService.post(Endpoints.SIGN_IN_GOOGLE, payload);
  }
}
