const db = require("../models")();

let response;

const post = (req, res, next) => {
  if (!req.body.title) {
    const error = new Error("Title not found!");
    error.status = 400;
    throw error;
  }

  if (!req.body.content) {
    const error = new Error("Content not found!");
    error.status = 400;
    throw error;
  }

  if (!req.body.author) {
    const error = new Error("Author not found!");
    error.status = 400;
    throw error;
  }

  const authorExists = db.getUserById(req.body.author);
  if (!authorExists) {
    const error = new Error("Author not exists!");
    error.status = 403;
    throw error;
  }

  const post = db.createPost(req.body);
  response = {
    message: "Request Succeed",
    data: {
      post
    }
  };

  res.status(201).json(response);
};

const getOne = (req, res, next) => {
  const postID = req.params.id;

  const post = db.getPostById(postID);

  response = {
    message: "Request Succeed",
    data: {
      post
    }
  };

  res.status(200).json(response);
};

const getAll = (req, res, next) => {
  const posts = db.getAllPosts();

  response = {
    message: "Request Succeed",
    data: {
      posts
    }
  };

  res.status(200).json(response);
};

const patch = (req, res, next) => {
  const postID = req.params.id;

  const post = db.getPostById(postID);
  if (!post) {
    const error = new Error("Post not found!");
    error.status = 400;
    throw error;
  }

  const updatedPost = db.modifyPost(postID, req.body);
  response = {
    message: "Request Succeed",
    data: {
      updatedPost
    }
  };

  res.status(200).json(response);
};

const remove = (req, res, next) => {
  const postID = req.params.id;

  const post = db.getPostById(postID);
  if (!post) {
    const error = new Error("Post not found!");
    error.status = 400;
    throw error;
  }

  const deletedPost = db.deletePost(postID);
  response = {
    message: "Request Succeed",
    data: {
      deletedPost
    }
  };

  res.status(200).json(response);
};

module.exports = {
  post,
  getOne,
  getAll,
  patch,
  remove
};
