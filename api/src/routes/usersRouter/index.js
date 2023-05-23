const { Router } = require("express");
const {
  getAllUsers,
  registerUser,
  authByUsernamePwd,
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
    const { email, username, password, admin } = req.body;
    if (!email || !username || !password)
      return res.status(400).send("Faltan datos");
    const createUser = await registerUser({ email, username, password, admin });
    return res.status(200).send(createUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

usersRouter.post("/autenticado", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).send("Faltan datos");
    }
    const responseLogin = await authByUsernamePwd({ username, password });
    return res.status(200).send(`${username} autenticado`);
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
});

usersRouter.post("/autorizado", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).send("Faltan datos");
    }
    const user = await authByUsernamePwd({ username, password });
    if (user.dataValues.admin !== true)
      return res.status(401).send("No autorizado");
    return res.status(200).send(`${username} administrador`);
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
});

module.exports = usersRouter;
