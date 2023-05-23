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
  try {
    const existingEmail = await User.findOne({
      where: { email: newUser.email },
    });
    const existingUsername = await User.findOne({
      where: { username: newUser.username },
    });
    if (existingEmail) {
      return "Email en uso.";
    } else if (existingUsername) {
      return "Nombre de usuario en uso";
    } else {
      const createdUser = await User.create(newUser);
      return "Registrado con éxito.";
    }
  } catch (error) {
    return error.message;
  }
};

const loginUser = async (user, res) => {
  try {
    const existingUsername = await User.findOne({
      where: { username: user.username },
    });
    const samePassword = await User.findOne({
      where: { password: user.password },
    });
    if (!existingUsername) throw new Error("Nombre de usuario inexistente.");
    if (!samePassword) throw new Error("Contraseña incorrecta");
    return `${user.username} Autenticado`;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getAllUsers,
  registerUser,
  loginUser,
};
