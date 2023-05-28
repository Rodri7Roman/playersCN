export const validator = (input) => {
  let err = {};

  if (input.name.length < 2) err.name = "Demasiado corto.";
  if (input.name.length > 20) err.name = "Demasiado largo.";

  if (input.username.length < 2) err.username = "Demasiado corto.";
  if (input.username.length > 20) err.username = "Demasiado largo.";



  return err;
};
