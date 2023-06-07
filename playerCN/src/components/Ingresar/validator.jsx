export const validate = (input) => {
  let err = {};

  if (!input.username) {
    err.username = "Username is required.";
  }

  if (!input.password) {
    err.password = "Password is required.";
  }

  return err;
};
