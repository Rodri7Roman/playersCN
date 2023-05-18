const { Router } = require("express");

const postsRouter = Router();


postsRouter.get("/",(req,res)=>{
    res.send("Estoy en Posts")
})


module.exports = postsRouter;
