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

  if (!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(input.email) && input.email !== "") {
    err.email = "Email inválido.";
  }

  if (input.actualPassword.length < 1 && input.email.length > 0) {
    err.actualPassword = "Ingrese su contraseña actual.";
  }

  return err;
};
