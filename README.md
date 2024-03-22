# Basic Auth

# Brandon Mizutani

# Lab 07 Notes:

### MIDDLEWARE FOR **SIGNUP!**

- before sending back a res.status(200).send(req.user) --> middleware must happen!
  - middleware for signup takes username and password, ecrypts the password and stores it in the db with a new instance of the user model
  - POST encodes the login information

### MIDDLEWARE FOR **SIGNIN**

- user makes a request, header of the request: authorization: Basic aldkfadsfjsl (encoded password)
- comes in like username: password which has been encoded with **Base64**
- request is intercepted by middleware
- middleware says get the auth header
  - split the basic away from the encoded username and password
  - decode it: username:password
  - ask the database for the user associated with the username
  - then use **bcrypt**.compare function to compare the password agains that user encrypted password

### Bearer Auth

- Also when user signs in, give them a token back and that token lets them bypass the signin process - we will add it to their user model
- we still have to verify the token
- we get the token from Bearer Auth Header - verify the token and if it checks out we let them in our route
- send req.status(200).send('good job you pass');
- payload and signature

# Terminology

- Bearer Authentication
  - a token generated from some user info - the user is now the bearer of the token and it contatins everything needed to confirm their identity
    - extra security
    - time constraint
    - single session
    - etc
- JSON Web Tokens (jwt)
  - encoded with a secret password and holds user information. Can be decoded as long as you know the secret password
- Web Security
  - making things secure on the internet??
- When to use Basic or Bearer Authentication
  - we can store user roles in bearer to protect routes
  - Signin is basic authentication

# To Do List

- move the user model to it's own file
- add the additional logic that makes a token on user model when the user signs in create bearer file

- add a get() (access method) method to token - allows us to access some value. This term is often associated with classes also called access method
  - function that GETS you some information
- conversly the term setter, set() method is used to set a new value for something
- import jsonwebtoken
  
- create bearer file
- write bearer auth mw
- create user route