const { Router } = require("express");
const {
  getAllPosts,
  postPost,
  verifyToken,
  getMyPosts,
  getPostsByUsername,
  getPostById,
  postComment,
  getCommentsByPostId,
} = require("../../controllers/postsController");

const postsRouter = Router();

postsRouter.get("/", async (req, res) => {
  try {
    const { limit, offset } = req.query;
    const posts = await getAllPosts(limit, offset);
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
    const { parentPostId } = req.query;
    if (parentPostId) {
      const newPost = await postComment({ content, userId, parentPostId });
      return res.status(200).send(newPost);
    } else {
      const newPost = await postPost({ content, userId });
      return res.status(200).send(newPost);
    }
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

postsRouter.get("/comments/:parentId", async (req, res) => {
  try {
    const { parentId } = req.params;
    if (!parentId) return res.status(400).send("ParentId no recibido.");
    const comments = await getCommentsByPostId({ parentId });
    res.status(200).send(comments);
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
