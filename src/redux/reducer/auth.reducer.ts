import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {
  AuthState,
  LoginPayload,
  NewPasswordPayload,
  RefreshToken,
  SendOTPPayload,
  User,
} from '../types';
import {Redux} from '../types/redux.type';
import {UpdateProfileDto} from '../dto';

const initialState: AuthState = {
  enableSignIn: false,
  accessToken: '',
  refreshToken: '',
  user: {},
};

const reducer = createSlice({
  name: Redux.auth,
  initialState,
  reducers: {
    //login
    handleLogin: (
      state: AuthState,
      _: PayloadAction<Partial<LoginPayload>>,
    ) => {
      return state;
    },
    handleLoginSuccess: (
      state: AuthState,
      action: PayloadAction<Partial<AuthState>>,
    ) => {
      return {
        ...state,
        ...action.payload,
      };
    },

    //login google
    handleLoginGoogle: (
      state: AuthState,
      _: PayloadAction<Pick<LoginPayload, 'device_token'>>,
    ) => {
      return {
        ...state,
      };
    },

    //logout
    handleLogout: (state: AuthState) => {
      return {
        ...state,
        enableSignIn: false,
        accessToken: '',
        refreshToken: '',
        enableBiometric: false,
        user: {},
        isGoogle: false,
      };
    },

    //create account
    handleCreateAccount: (
      state: AuthState,
      _: PayloadAction<Omit<LoginPayload, 'device_token' | 'idToken'>>,
    ) => {
      return state;
    },
    handleCreateAccountSuccess: (
      state: AuthState,
      action: PayloadAction<Partial<AuthState>>,
    ) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    handleCreateAccountFailed: (
      state: AuthState,
      action: PayloadAction<Partial<AuthState>>,
    ) => {
      return {
        ...state,
        ...action.payload,
      };
    },

    //get user info
    getUserInfo: (state: AuthState) => {
      return {
        ...state,
      };
    },
    getUserInfoSuccess: (
      state: AuthState,
      action: PayloadAction<Partial<AuthState>>,
    ) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    getUserInfoFailed: (
      state: AuthState,
      action: PayloadAction<Partial<AuthState>>,
    ) => {
      return {
        ...state,
        ...action.payload,
      };
    },

    refreshToken: (state: AuthState, action: PayloadAction<RefreshToken>) => {
      return {
        ...state,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
      };
    },
    //update user
    handleUpdateAvatar: (state: AuthState, _: PayloadAction<FormData>) => {
      return state;
    },

    handleDeleteAvatar: (state: AuthState) => {
      return state;
    },

    handleUpdateUserProfile: (
      state: AuthState,
      _: PayloadAction<UpdateProfileDto>,
    ) => {
      return {
        ...state,
      };
    },
    handleUpdateUserProfileSuccess: (state: AuthState) => {
      return {
        ...state,
        enableSignIn: true,
      };
    },

    handleForgotPassword: (
      state: AuthState,
      _: PayloadAction<Pick<LoginPayload, 'email'>>,
    ) => {
      return {
        ...state,
      };
    },

    setEmailForgotPassword: (
      state: AuthState,
      payload: PayloadAction<Pick<LoginPayload, 'email'>>,
    ) => {
      return {
        ...state,
        user: {
          ...state.user,
          email: payload.payload.email,
        },
      };
    },

    handleSendOTP: (
      state: AuthState,
      _: PayloadAction<Pick<SendOTPPayload, 'email'>>,
    ) => {
      return {
        ...state,
      };
    },

    handleVerifyOTP: (state: AuthState, _: PayloadAction<SendOTPPayload>) => {
      return {
        ...state,
      };
    },

    handleNewPassword: (
      state: AuthState,
      _: PayloadAction<NewPasswordPayload>,
    ) => {
      return {
        ...state,
      };
    },
    setNewPassword: (
      state: AuthState,
      _: PayloadAction<NewPasswordPayload>,
    ) => {
      return {
        ...state,
        user: {
          ...state.user,
          email: _.payload.email,
          password: _.payload.password,
        },
      };
    },
  },
});

export const AuthActions = reducer.actions;
export const AuthReducer = reducer.reducer;
