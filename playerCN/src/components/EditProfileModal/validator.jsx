export const validator = (input, user) => {
  let err = {};

  if (input.name.length < 2 && input.name !== user.name && input.name !== "")
    err.name = "Demasiado corto.";
  if (input.name.length > 20) err.name = "Demasiado largo.";

  if (
    input.username.length < 2 &&
    input.username !== user.username &&
    input.username !== ""
  )
    err.username = "Demasiado corto.";
  if (input.username.length > 20) err.username = "Demasiado largo.";

  return err;
};
