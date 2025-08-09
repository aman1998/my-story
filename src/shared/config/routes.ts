export const ROUTES = {
  home: "/",
  lk: "/app",
  auth: "/auth",
  login: "/auth/login",
  signup: "/auth/signup",
  forgotPassword: "/auth/forgot-password",
  updatePassword: "/auth/update-password",
  signUpSuccess: "/auth/sign-up-success",
  authError: "/auth/error",
  authConfirm: "/auth/confirm",
  authCallback: "/auth/callback",
};

const isProtectedRoute = (path: string) => {
  return path.startsWith(ROUTES.lk);
};

export { isProtectedRoute };
