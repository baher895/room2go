<a name='top'></a>

# Room 2 Go, Code Assessment:
This is a sample project. I used Node.js, ES7, Express & My Own Database ;). Its a simple backend server shows how to setup a Express server.

**Note :** This is a dev project, not a production version.

# Developer Note:
Quick Index:
- [Before Start](#before-start) 
- [How to Run](#how-to-run) 
- [How to Clean](#how-to-clean) 
- [Health Check](#health-check) 
- [Models](#models) 
- [API definition](#api-definition) 

<a name='before-start'></a>


## Before Start:                      
- Please create a JSON file in the root folder and name it `nodemon.json`. 

**Note :** It will be used to store the environment variable during dev mode. In production, you need to set them in another way.

- Copy and past below JSON object to `nodemon.json` file: 
```
{
  "env": {
    "PORT": 3000
  }
}
```

- Update `PORT` in JSON file to whatever is open in your system

[Go 2 Top ^](#top)

<a name='how-to-run'></a>

## How to Run:
In the root folder, in command prompt, run:

- npm install
- npm start

**Note :** You can find Port number in your console output.

[Go 2 Top ^](#top)

<a name='how-to-clean'></a>

## How to Clean:
In the root folder, in command prompt, run:

- npm run clean

**Note :** It works only on MacOS, the windows version would be available soon.

[Go 2 Top ^](#top)

<a name='health-check'></a>

## Health Check:
- Send a GET request to `/health-check` 
- You should be able to get the message: "Server is Up & Healthy!" in respond.
- You are Good 2 GOoOo

[Go 2 Top ^](#top)

<a name='models'></a>

## Models:
- User:
```
userID
username
email
posts
```

**Note :** `userID` should be unique and will be provided by software.

**Note :** `username` & `email` should be unique.

- Post:
```
postID
title
content
author
```

[Go 2 Top ^](#top)

<a name='api-definition'></a>

## API Definition:
- /users
```
Action: POST
Body: 
{
  "username": "baher895",
  "email": "baher.hedayati@gmail.com"
}
Success Respond: (201)
{
  message: "Succeed!",
  data: {
    user
  }
}
Failure Respond: 
{
  message: "Failed!",
  data: {
    error
  }
}
```

- /users
```
Action: GET
Body: None
Success Respond: (200)
{
  message: "Succeed!",
  data: {
    users
  }
}
Failure Respond: 
{
  message: "Failed!",
  data: {
    error
  }
}
```

- /users?
```
Action: GET
Query Params: id, username, email
Body: None
Success Respond: (200)
{
  message: "Succeed!",
  data: {
    user
  }
}
Failure Respond: 
{
  message: "Failed!",
  data: {
    error
  }
}
```

- /users/:id
```
Action: PATCH
Body: 
{
  "username": "baher895",
  "email": "baher.hedayati@gmail.com"
}
Success Respond: (200)
{
  message: "Succeed!",
  data: {
    updatedUser
  }
}
Failure Respond: 
{
  message: "Failed!",
  data: {
    error
  }
}
```

**Note :** You can provide any or both fields. You don't need to provide all fields.

**Note :** `username` & `email` should be unique.

- /users/:id
```
Action: DELETE
Body: None
Success Respond: (200)
{
  message: "Succeed!",
  data: {
    deletedUser
  }
}
Failure Respond: 
{
  message: "Failed!",
  data: {
    error
  }
}
```

**Note :** By deleting a user, all its posts would be deleted.

- /posts
```
Action: POST
Body: 
{
  "title": "Baher Database",
  "content" : "I tried to create my own simple in momory database. its funny, but works!",
  "author": "c2c5e190-dd4a-4452-88e2-ab49b9e70798"
}
Success Respond: (201)
{
  message: "Succeed!",
  data: {
    post
  }
}
Failure Respond:
{
  message: "Failed!",
  data: {
    error
  }
}
```

- /posts
```
Action: GET
Body: None
Success Respond: (200)
{
  message: "Succeed!",
  data: {
    posts
  }
}
Failure Respond:
{
  message: "Failed!",
  data: {
    error
  }
}
```

- /posts/:id
```
Action: GET
Body: None
Success Respond: (200)
{
  message: "Succeed!",
  data: {
    post
  }
}
Failure Respond:
{
  message: "Failed!",
  data: {
    error
  }
}
```

- /posts/:id
```
Action: PATCH
Body: 
{
  "title": "Baher Database",
  "content" : "I tried to create my own simple in momory database. its funny, but works!"
}
Success Respond: (200)
{
  message: "Succeed!",
  data: {
    updatedPost
  }
}
Failure Respond:
{
  message: "Failed!",
  data: {
    error
  }
}
```

**Note :** You can provide any or both fields. You don't need to provide all fields.

**Note :** You can not update `author`.

- /posts/:id
```
Action: DELETE
Body: None
Success Respond: (200)
{
  message: "Succeed!",
  data: {
    deletedPost
  }
}
Failure Respond:
{
  message: "Failed!",
  data: {
    error
  }
}
```

**Note :** In some queries the return object is populated, in some cases not. Its on purpose.

[Go 2 Top ^](#top)