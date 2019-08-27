const clone = require("lodash.clone");
const cloneDeep = require("lodash.clonedeep");

const User = require("./user");
const Post = require("./post");

let db = null;

class BaherDB {
  constructor() {
    this.users = [];
    this.posts = [];
  }

  createUser({ username, email }) {
    const user = new User(username, email);
    this.users.push(user);

    return clone(user);
  }

  getAllUsers() {
    return this.users.map(user => this.populateUser(user));
  }

  getUserById(userID, populate = true) {
    let foundUser = null;
    this.users.some(user => {
      if (user.userID == userID) {
        if (populate) {
          foundUser = this.populateUser(user);
        } else {
          foundUser = clone(user);
        }
        return;
      }
    });

    return foundUser;
  }

  getUserByEmail(email) {
    let foundUser = null;
    this.users.some(user => {
      if (user.email == email) {
        foundUser = this.populateUser(user);
        return;
      }
    });

    return foundUser;
  }

  getUserByUsername(username) {
    let foundUser = null;
    this.users.some(user => {
      if (user.username == username) {
        foundUser = this.populateUser(user);
        return;
      }
    });

    return foundUser;
  }

  modifyUser(userID, { username, email }) {
    this.users.some(user => {
      if (user.userID == userID) {
        user.username = username ? username : user.username;
        user.email = email ? email : user.email;

        return;
      }
    });

    return this.getUserById(userID);
  }

  deleteUser(userID) {
    let deletedUser;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].userID == userID) {
        deletedUser = this.populateUser(this.users[i]);

        this.users[i].posts.forEach(postID => {
          this.deletePost(postID);
        });

        this.users.splice(i, 1);
        break;
      }
    }

    return deletedUser;
  }

  createPost({ title, content, author }) {
    const post = new Post(title, content, author);
    this.posts.push(post);
    this.addPost2User(author, post.postID);

    return this.populatePost(post);
  }

  getPostById(postID, populate = true) {
    let foundPost = null;
    this.posts.some(post => {
      if (post.postID == postID) {
        if (populate) {
          foundPost = this.populatePost(post);
        } else {
          foundPost = clone(post);
        }
        return;
      }
    });

    return foundPost;
  }

  getAllPosts() {
    return this.posts.map(post => this.populatePost(post));
  }

  modifyPost(postID, { title, content }) {
    this.posts.some(post => {
      if (post.postID == postID) {
        post.title = title ? title : post.title;
        post.content = content ? content : post.content;

        return;
      }
    });

    return this.getPostById(postID);
  }

  deletePost(postID) {
    let deletedPost;
    for (let i = 0; i < this.posts.length; i++) {
      if (this.posts[i].postID == postID) {
        deletedPost = this.populatePost(this.posts[i]);

        this.posts.splice(i, 1);
        break;
      }
    }

    return deletedPost;
  }

  addPost2User(userID, postID) {
    this.users.some(user => {
      if (user.userID == userID) {
        user.posts.push(postID);
        return;
      }
    });
  }

  populatePost(post) {
    const populatedPost = clone(post);

    populatedPost.author = this.getUserById(populatedPost.author, false);

    return populatedPost;
  }

  populateUser(user) {
    const populatedUser = clone(user);

    populatedUser.posts = populatedUser.posts.map(postID =>
      this.getPostById(postID, false)
    );

    return populatedUser;
  }
}

module.exports = () => {
  if (!db) {
    db = new BaherDB();
    console.log("Baher Database Initialized!");
  }
  return db;
};
