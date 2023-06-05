const { Router } = require("express");
const {
  getAllPosts,
  postPost,
  verifyToken,
  getMyPosts,
  getPostsByUsername,
  getPostById,
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
    if (!authorization) return res.status(401).send("Faltan datos");
    const { content } = req.body;
    if (!content.length) return res.status(400).send("Campo vacio.");
    const { payload } = await verifyToken(authorization);
    const userId = payload.id;
    const newPost = await postPost({ content, userId });
    return res.status(200).send(newPost);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

postsRouter.get("/myPosts", async (req, res) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send("No estas autorizado");
    const { payload } = await verifyToken(authorization);
    const userId = payload.id;
    const posts = await getMyPosts({ userId });
    res.status(200).send(posts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

postsRouter.get("/:idOrUsername", async (req, res) => {
  try {
    const { idOrUsername } = req.params;
    const { queryType } = req.query;
    if (!idOrUsername)
      return res.status(400).send("Id o username no recibido.");

    if (queryType === "username") {
      const posts = await getPostsByUsername({ idOrUsername });
      res.status(200).send(posts);
    } else if (queryType === "id") {
      const post = await getPostById({ idOrUsername });
      res.status(200).send(post);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = postsRouter;
