const { Router } = require("express");
const routesUser = require("./usersRouter");
const routesPosts = require("./postsRouter");

const router = Router();

router.use("/users", routesUser);
router.use("/posts", routesPosts);

module.exports = router;
