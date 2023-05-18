const { Router } = require("express");
const routesUser = require("./usersRouter");

const router = Router();

router.use("/users", routesUser);

module.exports = router;
