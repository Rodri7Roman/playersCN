const { Router } = require("express");
const {
  getAllUsers,
  registerUser,
  loginUser,
} = require("../../controllers/usersController");

const usersRouter = Router();

usersRouter.get("/", async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).send(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

usersRouter.post("/registrarse", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    if (!email || !username || !password) {
      return res.status(400).send("Faltan datos");
    }
    const createUser = await registerUser({ email, username, password });
    return res.status(200).send(createUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

usersRouter.post("/ingresar", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).send("Faltan datos");
    }
    const responseLogin = await loginUser({ username, password });
    return res.status(200).send(responseLogin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = usersRouter;
