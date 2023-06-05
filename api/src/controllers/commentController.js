const { Comment, User, Post } = require("../db");
const { jwtVerify } = require("jose");

const getAllComments = async () => {
  const allComments = await Comment.findAll({
    order: [["createdAt", "DESC"]],
  });
  return allComments;
};

const postComment = async ({ content, userId, postId }) => {
  const user = await User.findByPk(userId);
  if (!user) throw new Error("Usuario inexistente.");
  const post = await Post.findByPk(postId);
  if (!post) throw new Error("Post inexistente.");
  const newComment = await Comment.create({ content });
  await newComment.setUser(userId);
  await newComment.setPost(post);
  return "Publicado.";
};

const verifyToken = async (authorization) => {
  const encoder = new TextEncoder();
  const jwtData = await jwtVerify(
    authorization.split(" ")[1],
    encoder.encode(process.env.JWT_PRIVATEKEY)
  );
  return jwtData;
};

const getCommentByPostId = async ({ postId }) => {
  const comments = await Comment.findAll({
    where: {
      postId,
    },
  });
  if (!comments) throw new Error("No hay comentarios.");
  return comments;
};

module.exports = {
  postComment,
  verifyToken,
  getAllComments,
  getCommentByPostId,
};
