import {ENDPOINTS, Endpoints} from '../../environment';
import {LoginPayload, SendOTPPayload} from '../types';
import apiService from './api.service';

export class AuthService {
  static async handleLogin(payload: LoginPayload) {
    return await apiService.post(ENDPOINTS.LOGIN, payload);
  }
  static async handleCreateAccount(
    payload: Omit<LoginPayload, 'device_token' | 'idToken'>,
  ) {
    return await apiService.post(ENDPOINTS.REGISTER, payload);
  }
  static async hanleGGLogin(payload: Omit<LoginPayload, 'password' | 'email'>) {
    return await apiService.post(ENDPOINTS.LOGIN_GOOGLE, payload);
  }

  static async hanleForgotPasswork(payload: Pick<LoginPayload, 'email'>) {
    return await apiService.post(ENDPOINTS.SEND_OTP, payload);
  }

  static async handleVerifyOTP(payload: SendOTPPayload) {
    return await apiService.post(ENDPOINTS.VERIFY_OTP, payload);
  }
}
