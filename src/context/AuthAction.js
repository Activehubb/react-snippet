export const signInSuccess = (user) => ({
  type: "SIGNIN_SUCCESS",
  payload: user,
});
export const signInFailure = (error) => ({
  type: "SIGNIN_FAILURE",
  payload: error,
});
