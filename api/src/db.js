require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const db = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);

const basename = path.basename(__filename);

const modelDefiners = [];
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });
modelDefiners.forEach((model) => model(db));
let entries = Object.entries(db.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);

db.models = Object.fromEntries(capsEntries);

const { User, Post, Comment } = db.models;

User.hasMany(Post);
Post.belongsTo(User);

User.hasMany(Comment);
Comment.belongsTo(User);

Post.hasMany(Comment, { foreignKey: "postId" });
Comment.belongsTo(Post, { foreignKey: "postId" });

Comment.associate = (models) => {
  Comment.belongsTo(models.Comment, {
    foreignKey: "parentCommentId",
    as: "parentComment",
  });
  Comment.hasMany(models.Comment, {
    foreignKey: "parentCommentId",
    as: "replies",
  });
};

Comment.afterCreate(async (comment, options) => {
  if (comment.parentCommentId) {
    // Es una respuesta a un comentario
    const parentComment = await Comment.findByPk(comment.parentCommentId);
    if (parentComment) {
      const updatedKids = [...parentComment.kids, comment.id];
      await parentComment.update({ kids: updatedKids }, options);
    }
  } else {
    // Es una respuesta a un post
    const post = await Post.findByPk(comment.PostId);
    console.log(comment);
    if (post) {
      const updatedKids = [...post.kids, comment.id];
      await post.update({ kids: updatedKids }, options);
    }
  }
});

module.exports = {
  ...db.models,
  conn: db,
};
