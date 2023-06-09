const { Router } = require("express");
const {
  getAllUsers,
  registerUser,
  authByUsernamePwd,
  verifyToken,
  getUser,
  updateUsername,
  updateEmail,
  updatePassword,
  eliminarUsuario,
  updateName,
  getUserById,
  getUserByUsername,
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
    return res.status(201).send("Registrado con éxito.");
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
    const token = await authByUsernamePwd({ username, password });
    return res.send({ token });
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
});

usersRouter.get("/perfil", async (req, res) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send("No estas autenticado");
    const { payload } = await verifyToken(authorization);
    const user = await getUser(payload.id);
    return res.status(200).send(user);
  } catch (error) {
    res.status(401).json({ error: error.message });
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

usersRouter.patch("/updateUsername", async (req, res) => {
  try {
    const { username } = req.body;
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send("No estas autenticado");
    const { payload } = await verifyToken(authorization);
    const user = await updateUsername(payload.id, username);
    return res.status(200).send(user);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

usersRouter.patch("/updateName", async (req, res) => {
  try {
    const { name } = req.body;
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send("No estas autenticado");
    const { payload } = await verifyToken(authorization);
    const user = await updateName(payload.id, name);
    return res.status(200).send(user);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

usersRouter.patch("/updateEmail", async (req, res) => {
  try {
    const { email, password } = req.body;
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send("No estas autenticado");
    const { payload } = await verifyToken(authorization);
    const user = await updateEmail(payload.id, email, password);
    return res.status(200).send(user);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

usersRouter.patch("/updatePassword", async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send("No estas autenticado");
    const { payload } = await verifyToken(authorization);
    const user = await updatePassword(payload.id, oldPassword, newPassword);
    return res.status(200).send(user);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

usersRouter.delete("/eliminar", async (req, res) => {
  try {
    const { password } = req.body;
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send("No estas autenticado");
    const { payload } = await verifyToken(authorization);
    const user = await eliminarUsuario(payload.id, password);
    return res.status(200).send(user);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

usersRouter.get("/:idOrUsername", async (req, res) => {
  try {
    const { idOrUsername } = req.params;
    const { queryType } = req.query;
    if (!idOrUsername) return res.status(401).send("Id no recibido.");
    if (queryType === "id") {
      const user = await getUserById(idOrUsername);
      res.status(200).send(user);
    } else if (queryType === "username") {
      const user = await getUserByUsername(idOrUsername);
      res.status(200).send(user);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = usersRouter;
