const express = require('express');
const app = express();
const mongoose = require('mongoose');

// define the MongoDB schema for the user collection
const userSchema = new mongoose.Schema({
  email: String,
  isVerified: Boolean
});
const User = mongoose.model('User', userSchema);

// define the route for the verification URL
app.get('/verify-email', async (req, res) => {
  const token = req.query.token;

  // find the user in the MongoDB collection by the verification token
  const user = await User.findOneAndUpdate({ verificationToken: token }, { isVerified: true });

  if (user) {
    res.send('Thank you for verifying your email address!');
  } else {
    res.send('Invalid verification URL');
  }
});

// connect to the MongoDB database
mongoose.connect('mongodb://localhost/myapp', { useNewUrlParser: true });

// start the Node.js server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
