const uuid = require("uuid/v4");

class User {
  constructor(username, email) {
    this.userID = uuid();
    this.username = username;
    this.email = email;
    this.posts = [];
  }
}

module.exports = User;
