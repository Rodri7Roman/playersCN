const { Router } = require("express");
const routesUser = require("./usersRouter");
const routesPosts = require("./postsRouter");
const routesComments = require("./commentsRouter");

const router = Router();

router.use("/users", routesUser);
router.use("/posts", routesPosts);
router.use("/comment", routesComments);

module.exports = router;
