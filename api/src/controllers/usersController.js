const { hash } = require("bcrypt");
const { User } = require("../db");
const { SignJWT, jwtVerify } = require("jose");
const { compare } = require("bcrypt");

const getAllUsers = async () => {
  try {
    const allUsers = await User.findAll({
      attributes: { exclude: "password" },
    });
    return allUsers;
  } catch (error) {
    return error.message;
  }
};

const getUserById = async (id) => {
  try {
    const allUsers = await User.findOne({
      where: {
        id,
      },
      attributes: { exclude: "password" },
    });
    return allUsers;
  } catch (error) {
    return error.message;
  }
};

const registerUser = async ({ email, username, password, admin }) => {
  const existingEmail = await User.findOne({
    where: { email: email },
  });
  const existingUsername = await User.findOne({
    where: { username: username },
  });
  if (existingEmail) throw new Error("Email en uso.");
  else if (existingUsername) throw new Error("Nombre de usuario en uso");
  else {
    const hashedPassword = await hash(password, 12);
    const createdUser = await User.create({
      email,
      username,
      password: hashedPassword,
      admin,
    });
    return createdUser;
  }
};

const authByUsernamePwd = async (user) => {
  const existingUsername = await User.findOne({
    where: { username: user.username },
  });
  if (!existingUsername) throw new Error("Credenciales incorrectas.");

  const checkPassword = await compare(user.password, existingUsername.password);
  if (!checkPassword) throw new Error("Credenciales incorrectas.");

  const id = existingUsername.id;
  const jwtConstructor = new SignJWT({ id });
  const encoder = new TextEncoder();
  const jwt = await jwtConstructor
    .setProtectedHeader({
      alg: "HS256",
      typ: "JWT",
    })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encoder.encode(process.env.JWT_PRIVATEKEY));

  return jwt;
};

const verifyToken = async (authorization) => {
  const encoder = new TextEncoder();
  const jwtData = await jwtVerify(
    authorization.split(" ")[1],
    encoder.encode(process.env.JWT_PRIVATEKEY)
  );
  return jwtData;
};

const updateUsername = async (id, username) => {
  const user = await User.findByPk(id);
  const usernameExisting = await User.findOne({
    where: {
      username: username,
    },
  });
  if (!user) throw new Error("Usuario no encontrado");
  if (usernameExisting) throw new Error("Nombre de usuario en uso.");
  if (username.length < 2)
    throw new Error("Nombre de usuario demasiado corto.");
  user.username = username;
  await user.save();
  return "Usuario Actualizado";
};

const updateName = async (id, name) => {
  const user = await User.findByPk(id);
  if (!user) throw new Error("Usuario no encontrado");
  if (name.length < 2) throw new Error("Nombre de usuario demasiado corto.");
  user.name = name;
  await user.save();
  return "Usuario Actualizado";
};

const updateEmail = async (id, email, password) => {
  const user = await User.findByPk(id);
  if (!user) throw new Error("Usuario no encontrado");

  const checkPassword = await compare(password, user.password);
  if (!checkPassword) throw new Error("Credenciales incorrectas.");

  user.email = email;
  await user.save();

  return "Email Actualizado";
};

const updatePassword = async (id, oldPassword, newPassword) => {
  const user = await User.findByPk(id);
  if (!user) throw new Error("Usuario no encontrado");

  const checkPassword = await compare(oldPassword, user.password);
  if (!checkPassword) throw new Error("Credenciales incorrectas.");

  const hashedPassword = await hash(newPassword, 12);
  user.password = hashedPassword;
  await user.save();

  return "Contraseña Actualizada";
};

const eliminarUsuario = async (id, password) => {
  const user = await User.findByPk(id);
  if (!user) throw new Error("Usuario no encontrado");

  const checkPassword = await compare(password, user.password);
  if (!checkPassword) throw new Error("Credenciales incorrectas.");

  await user.destroy();

  return "Usuario Eliminado";
};

const getUser = async (userId) => {
  const user = await User.findByPk(userId);
  if (!user) throw new Error("Usuario inexistente");
  return user;
};

module.exports = {
  getAllUsers,
  registerUser,
  authByUsernamePwd,
  verifyToken,
  getUser,
  updateUsername,
  updateEmail,
  updatePassword,
  eliminarUsuario,
  updateName,
  getUserById,
};
