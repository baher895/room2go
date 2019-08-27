const db = require("../models")();

let response;

const post = (req, res, next) => {
  if (!req.body.username) {
    const error = new Error("Username not found!");
    error.status = 400;
    throw error;
  }

  if (!req.body.email) {
    const error = new Error("Email not found!");
    error.status = 400;
    throw error;
  }

  const emailExists = db.getUserByEmail(req.body.email);
  if (emailExists) {
    const error = new Error("Email already exists!");
    error.status = 403;
    throw error;
  }

  const usernameExists = db.getUserByUsername(req.body.username);
  if (usernameExists) {
    const error = new Error("Username already exists!");
    error.status = 403;
    throw error;
  }

  const user = db.createUser(req.body);
  response = {
    message: "Request Succeed",
    data: {
      user
    }
  };

  res.status(201).json(response);
};

const get = (req, res, next) => {
  const postID = req.query.id;
  const email = req.query.email;
  const username = req.query.username;

  let user = null;
  let users = null;
  if (postID) {
    user = db.getUserById(postID);
  } else if (username) {
    user = db.getUserByUsername(username);
  } else if (email) {
    user = db.getUserByEmail(email);
  } else {
    users = db.getAllUsers();
  }

  response = {
    message: "Request Succeed",
    data: {}
  };

  if (user) {
    response.data.user = user;
  } else if (users) {
    response.data.users = users;
  }

  res.status(200).json(response);
};

const patch = (req, res, next) => {
  const userID = req.params.id;

  const user = db.getUserById(userID);
  if (!user) {
    const error = new Error("User not found!");
    error.status = 400;
    throw error;
  }

  if (req.body.username && req.body.username != user.username) {
    const duplicatedUsername = db.getUserByUsername(req.body.username);
    if (duplicatedUsername) {
      const error = new Error("New username already exists!");
      error.status = 403;
      throw error;
    }
  }

  if (req.body.email && req.body.email != user.email) {
    const duplicatedEmail = db.getUserByEmail(req.body.email);
    if (duplicatedEmail) {
      const error = new Error("New email already exists!");
      error.status = 403;
      throw error;
    }
  }

  const updatedUser = db.modifyUser(userID, req.body);
  response = {
    message: "Request Succeed",
    data: {
      updatedUser
    }
  };

  res.status(200).json(response);
};

const remove = (req, res, next) => {
  const userID = req.params.id;

  const user = db.getUserById(userID);
  if (!user) {
    const error = new Error("User not found!");
    error.status = 400;
    throw error;
  }

  const deletedUser = db.deleteUser(userID);
  response = {
    message: "Request Succeed",
    data: {
      deletedUser
    }
  };

  res.status(200).json(response);
};

module.exports = {
  post,
  get,
  patch,
  remove
};
