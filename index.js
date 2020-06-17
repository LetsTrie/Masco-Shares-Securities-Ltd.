const express = require('express');
const app = express();

// Middlewares
app.use(require('morgan')('dev'));

// Routes
app.use('/api/v1', require('./index.route'));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
});

/* 
  listen EADDRINUSE: address already in use :::5000
  => https://stackoverflow.com/a/43527235/9818882


*/
