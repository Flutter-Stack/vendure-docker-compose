const express = require('express');
// new: import User
const User = require('./User');
const app = express();
const PORT = 9005;

app.get('/', (req, res) => {
  res.send({ message: 'endpoint working' });
});

// new: route to users, that runs readAll()
app.get('/users', User.readAll);

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});


// postgres://username:sdkadady88da8+8ahdajd/ashdi==@localhost/database
