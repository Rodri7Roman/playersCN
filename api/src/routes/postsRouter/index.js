const { Router } = require("express");
const {
  getAllPosts,
  postPost,
  verifyToken,
  getPostsByUsername,
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
    const { content } = req.body;
    if (!content) throw new Error("Campo vacío.");
    const { payload } = await verifyToken(authorization);
    const userId = payload.id;
    const newPost = await postPost({ content, userId });
    return res.status(200).send(newPost);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

postsRouter.get("/:username", async (req, res) => {
  try {
    const { username } = req.params;
    if (!username) throw new Error("Username no recibido.");
    const posts = await getPostsByUsername(username);
    res.status(200).send(posts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = postsRouter;
