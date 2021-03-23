export function dehydrateSignIn(params) {
  return {
    userName: params.email,
    password: params.password
  };
}

export function dehydrateForgotPassword(params) {
  return {
    emailId: params.email,
  };
}

export function dehydrateResetPassword(params) {
  return {
    newPassword: params.newPassword,
    userId: params.userId
  };
}