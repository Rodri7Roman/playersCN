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

const { User, Post } = db.models;

User.hasMany(Post);
Post.belongsTo(User);

Post.hasMany(Post, { foreignKey: "parentPostId", as: "replies" });
Post.belongsTo(Post, { foreignKey: "parentPostId", as: "parentPost" });

Post.afterCreate(async (post, options) => {
  if (post.parentPostId) {
    // Es una respuesta a otro post
    const parentPost = await Post.findByPk(post.parentPostId);
    if (parentPost) {
      const updatedKids = [...parentPost.kids, post.id];
      await parentPost.update({ kids: updatedKids }, options);
    }
  }
});

module.exports = {
  ...db.models,
  conn: db,
};
