const { Router } = require("express");
const { getAllPosts, postPost } = require("../../controllers/postsController");

const postsRouter = Router();

postsRouter.get("/", async (req, res) => {
  try {
    const posts = await getAllPosts();
    res.status(200).send(posts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

postsRouter.post("/", async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content)
      throw new Error("Rellenar los campos titulo y content.");
    const post = await postPost({ title, content });
    res.status(200).send(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = postsRouter;
