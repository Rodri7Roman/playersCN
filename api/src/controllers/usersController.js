const { User } = require("../db");

const getAllUsers = async () => {
  try {
    const allUsers = await User.findAll();
    return allUsers;
  } catch (error) {
    return error.message;
  }
};

const postUser = async (newUser) => {
  try {
    const existingEmail = await User.findOne({
      where: { email: newUser.email },
    });
    const existingUsername = await User.findOne({
      where: { username: newUser.username },
    });
    if (existingEmail) {
      return "Email ya registrado";
    } else if (existingUsername) {
      return "Nombre de usuario en uso";
    } else {
      const createdUser = await User.create(newUser);
      return createdUser;
    }
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getAllUsers,
  postUser,
};
