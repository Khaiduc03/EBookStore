export const isValidEmail = (email: string) => {
  if (email === '') {
    return false;
  }
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
};

export const isValidPassword = (password: string) => {
  return password.length >= 6;
};
export const comparePassword = (password: string, confirmPassword: string) => {
  return password === confirmPassword;
}
