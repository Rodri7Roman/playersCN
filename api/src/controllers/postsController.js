const { Post, User } = require("../db");
const { jwtVerify } = require("jose");

const getAllPosts = async () => {
  try {
    const allPosts = await Post.findAll({
      attributes: { exclude: "password" },
    });
    return allPosts;
  } catch (error) {
    return error.message;
  }
};

const verifyToken = async (authorization) => {
  const encoder = new TextEncoder();
  const jwtData = await jwtVerify(
    authorization.split(" ")[1],
    encoder.encode(process.env.JWT_PRIVATEKEY)
  );
  return jwtData;
};

const postPost = async ({ title, content, userId }) => {
  const newPost = await Post.create({ title, content });
  const user = await User.findByPk(userId);
  if (!user) throw new Error("Usuario no encontrado.");
  await newPost.setUser(userId);
  return newPost;
};

module.exports = {
  getAllPosts,
  postPost,
  verifyToken,
};
