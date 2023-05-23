const { Router } = require("express");
const { getAllUsers, postUser } = require("../../controllers/usersController");
const {singJWT} = require("jose")

const usersRouter = Router();

usersRouter.get("/", async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).send(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

usersRouter.post("/", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    if (!email || !username || !password) {
      return res.status(400).send("Faltan datos");
    }
    const createUser = await postUser({ email, username, password });
    return res.status(200).send(createUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = usersRouter;
