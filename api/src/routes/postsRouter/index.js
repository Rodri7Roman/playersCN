const { Router } = require("express");
const {
  getAllPosts,
  postPost,
  verifyToken,
} = require("../../controllers/postsController");

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
    const { authorization } = req.headers;
    if (!authorization) throw new Error("No estas autorizado.");
    const { title, content } = req.body;
    if (!title || !content) throw new Error("Rellenar los campos.");
    const { payload } = await verifyToken(authorization);
    const userId = payload.id;
    const newPost = await postPost({ title, content, userId });
    return res.status(200).send(newPost);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

module.exports = postsRouter;
