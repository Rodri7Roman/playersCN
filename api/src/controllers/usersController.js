const { User } = require("../db");

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

const registerUser = async (newUser) => {
  const existingEmail = await User.findOne({
    where: { email: newUser.email },
  });
  const existingUsername = await User.findOne({
    where: { username: newUser.username },
  });
  if (existingEmail) throw new Error("Email en uso.");
  else if (existingUsername) throw new Error("Nombre de usuario en uso");
  else {
    const createdUser = await User.create(newUser);
    return createdUser;
  }
};

const authByUsernamePwd = async (user) => {
  const existingUsername = await User.findOne({
    where: { username: user.username },
  });
  const samePassword = await User.findOne({
    where: { password: user.password, username: user.username },
  });
  if (!existingUsername || !samePassword)
    throw new Error("Nombre de usuario o contraseña incorrecta.");

  return samePassword;
};

module.exports = {
  getAllUsers,
  registerUser,
  authByUsernamePwd,
};
