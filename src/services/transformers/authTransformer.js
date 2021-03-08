export function dehydrateSignIn(params) {
  return {
    email: params.email,
    password: params.password
  };
}