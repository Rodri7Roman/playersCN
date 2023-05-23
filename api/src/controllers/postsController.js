const { Post } = require("../db");

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

const postPost = async ({ title, content }) => {
  try {
    const post = await Post.create({ title, content });
    return post;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getAllPosts,
  postPost,
};
