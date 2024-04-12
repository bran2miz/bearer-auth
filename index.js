'use strict';
require('dotenv').config();
const { start } = require('./src/server.js');


// Start up DB Server
// any significant changes we need to drop() and then re-sync()
const { db } = require('./src/auth/models/index.js');
db.sync()
  .then(() => {

    // Start the web server
    require('./src/server.js').start(process.env.PORT);
  });

// start function that takes in PORT