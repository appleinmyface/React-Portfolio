const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config(); // Load environment variables (if needed)

const app = express();
app.use(bodyParser.json());

// Handle POST request to /api/contact
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Log the form data to the console
  console.log('Form submission received:');
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);

  // Respond to the frontend
  res.status(200).json({ message: 'Form data logged successfully!' });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
