import {ENDPOINTS} from '../../environment';
import {LoginPayload, NewPasswordPayload, SendOTPPayload} from '../types';
import apiService from './api.service';

export class AuthService {
  static async handleLogin(payload: LoginPayload) {
    return await apiService.post(ENDPOINTS.LOGIN, payload);
  }
  static async handleCreateAccount(
    payload: Omit<LoginPayload, 'device_token' | 'idToken'>,
  ) {
    console.log(ENDPOINTS.REGISTER);
    return await apiService.post(ENDPOINTS.REGISTER, payload);
  }
  static async hanleGGLogin(payload: Omit<LoginPayload, 'password' | 'email'>) {
    return await apiService.post(ENDPOINTS.LOGIN_GOOGLE, payload);
  }

  static async hanleForgotPassword(payload: Pick<LoginPayload, 'email'>) {
    return await apiService.post(ENDPOINTS.SEND_OTP, payload);
  }

  static async handleSendOTP(payload: Pick<SendOTPPayload, 'email'>) {
    return await apiService.post(ENDPOINTS.SEND_OTP, payload);
  }

  static async handleVerifyOTP(payload: SendOTPPayload) {
    return await apiService.post(ENDPOINTS.VERIFY_OTP, payload);
  }

  static async handleNewPassword(payload: NewPasswordPayload) {
    return await apiService.put(ENDPOINTS.UPDATE_PASSWORD, payload);
  }
}
