const { Router } = require("express");
const {
  postComment,
  verifyToken,
  getAllComments,
  getCommentByPostId,
} = require("../../controllers/commentController");

const commentsRouter = Router();

commentsRouter.get("/", async (req, res) => {
  try {
    const comments = await getAllComments();
    res.status(200).send(comments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

commentsRouter.post("/:postId", async (req, res) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send("No estas autorizado");
    const { content } = req.body;
    if (!content) return res.status(400).send("Campo vacio.");
    const postId = req.params.postId;
    const { payload } = await verifyToken(authorization);
    const userId = payload.id;
    const newComment = await postComment({ content, postId, userId });
    return res.status(200).send(newComment);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

commentsRouter.get("/:postId", async (req, res) => {
  try {
    const { postId } = req.params;
    if (!postId) return res.status(400).send("postId no recibido.");
    const comments = await getCommentByPostId({ postId });
    return res.status(200).send(comments);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

module.exports = commentsRouter;
