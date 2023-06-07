export const validate = (input) => {
  let err = {};

  const cleanedPost = input.post.replace(/(\r\n|\n|\r)/gm, "");

  if (cleanedPost.trim().length === 0) {
    err.post = "Campo Vacío.";
  } else if (!/[a-zA-Z]/.test(cleanedPost)) {
    err.post = "El campo debe contener al menos una letra.";
  }

  return err;
};
