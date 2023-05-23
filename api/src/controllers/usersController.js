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

const updateData = async (id, data) => {
  const user = await User.findOne({ where: { id: id } });
  if (!user) throw new Error("Usuario no encontrado");
  const updatedUser = await User.update(data, {
    where: {
      id: id,
    },
  });
  return "Usuario Actualizado";
};

const getUser = (userId) => {
  const user = User.findOne({
    where: {
      id: userId,
    },
  });
  if (!user) throw new Error("Usuario inexistente");
  return user;
};

module.exports = {
  getAllUsers,
  registerUser,
  authByUsernamePwd,
  verifyToken,
  getUser,
  updateData,
};
