import {
  loginUser,
  logoutUser,
  refreshSession,
  registerUser,
  requestReset,
  resetPassword,
} from '../services/auth';

export const registerUserController = async () => {
  await registerUser();
};

export const loginUserController = async () => {
  await loginUser();
};

export const logoutUserController = async () => {
  await logoutUser();
};

export const refreshSessionController = async () => {
  await refreshSession();
};

export const requestResetController = async () => {
  await requestReset();
};

export const resetPasswordController = async () => {
  await resetPassword();
};
