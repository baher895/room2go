const User = require("./user");
const Post = require("./post");

let db = null;

class BaherDB {
  constructor() {
    this.users = [];
    this.posts = [];
  }
  createUser() {}

  getUserById() {}

  getUserByEmail() {}

  getUserByUsername() {}

  modifyUser() {}

  deleteUser() {}

  createPost() {}

  getPostById() {}

  modifyPost() {}

  deletePost() {}
}

module.exports = () => {
  if (!db) {
    db = new BaherDB();
    console.log("Baher Database Initialized!");
  }
  return db;
};
