const uuid = require("uuid/v4");

class Post {
  constructor(title, content, author) {
    this.postID = uuid();
    this.title = title;
    this.content = content;
    this.author = author;
  }
}

module.exports = Post;