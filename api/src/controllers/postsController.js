const { Post, User } = require("../db");
const { jwtVerify } = require("jose");

const getAllPosts = async () => {
  // const allPosts = await Post.findAll();
  const allPosts = await Post.findAll({
    order: [["createdAt", "DESC"]],
  });
  return allPosts;
};

const getMyPosts = async ({ userId }) => {
  const user = await User.findByPk(userId);
  if (!user) throw new Error("Usuario inexistente.");
  const allPosts = await Post.findAll({
    where: {
      UserId: userId,
    },
    order: [["createdAt", "DESC"]],
  });
  return allPosts;
};

const getPostsByUsername = async ({ idOrUsername }) => {
  const user = await User.findOne({
    where: {
      username: idOrUsername,
    },
  });
  if (!user) throw new Error("Usuario inexistente.");
  const allPosts = await Post.findAll({
    where: {
      UserId: user.id,
    },
    order: [["createdAt", "DESC"]],
  });
  return allPosts;
};

const getPostById = async ({ idOrUsername }) => {
  const post = await Post.findByPk(idOrUsername);
  if (!post) throw new Error("Post no encontrado");
  return post;
};

const verifyToken = async (authorization) => {
  const encoder = new TextEncoder();
  const jwtData = await jwtVerify(
    authorization.split(" ")[1],
    encoder.encode(process.env.JWT_PRIVATEKEY)
  );
  return jwtData;
};

const postComment = async ({ content, userId, parentPostId }) => {
  const user = await User.findByPk(userId);
  if (!user) throw new Error("Usuario inexistente.");
  const parentPost = await Post.findByPk(parentPostId);
  if (!parentPost) throw new Error("Post padre inexistente.");
  const newPost = await Post.create({ content, parentPostId });
  return newPost;
};

const postPost = async ({ content, userId }) => {
  const user = await User.findByPk(userId);
  if (!user) throw new Error("Usuario inexistente.");
  const newPost = await Post.create({ content });
  await newPost.setUser(userId);
  return "Publicado.";
};

module.exports = {
  getAllPosts,
  postPost,
  verifyToken,
  getMyPosts,
  getPostsByUsername,
  getPostById,
  postComment,
};
