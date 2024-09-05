// Instantiate Express and the application - DO NOT MODIFY
const express = require('express');
const app = express();

// Import environment variables in order to connect to database - DO NOT MODIFY
require('dotenv').config();

// Express using json - DO NOT MODIFY
app.use(express.json());

// List of all colors in the database - DO NOT MODIFY
app.get('/colors', (req, res, next) => {
    res.send('This route would return all of the colors.');
});

// One color by id - DO NOT MODIFY
app.get('/colors/:id', (req, res, next) => {
    res.send('This route would return the color with the specified id.');
});

// Add color - DO NOT MODIFY
app.post('/colors', (req, res, next) => {
    res.send('This route would add a new color.');
})

// Update color - DO NOT MODIFY
app.put('/colors/:id', (req, res, next) => {
    res.send('This route would update an existing color with the specified id.');
})

// Delete color - DO NOT MODIFY
app.delete('/colors/:id', (req, res, next) => {
    res.send('This route would delete the color with the specified id.');
})

// Root route - DO NOT MODIFY
app.get('/', (req, res) => {
    res.json({
        message: "API server is running"
    });
});


const { removeTestDB } = require('./path-to-your-utils'); // Adjust the path accordingly

(async () => {
  try {
    await removeTestDB();
    console.log('Test DB removal function executed.');
  } catch (err) {
    console.error('Failed to execute test DB removal function:', err);
  }
})();

// Set port and listen for incoming requests - DO NOT MODIFY
const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
