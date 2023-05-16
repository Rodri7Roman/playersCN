export const validate = (input) => {
  let err = {};

  if (!input.email) {
    err.email = "Email is required.";
  }
  if (!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(input.email)) {
    err.email = "Email is invalid.";
  }

  if (!input.username) {
    err.username = "Username is required.";
  }

  if (!input.password) {
    err.password = "Password is required.";
  }

  return err;
};
