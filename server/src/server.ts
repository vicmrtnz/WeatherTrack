import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import routes from './routes/index.js';

dotenv.config();

const app = express();

// Set the port from environment variable or default to 3001
const PORT = process.env.PORT || 3001;

// Serve static files from the 'client/dist' folder (adjust based on your build setup)
app.use(express.static(path.join(__dirname, '../client/dist')));

// Middleware for parsing JSON data
app.use(express.json());

// Middleware for parsing URL-encoded data (usually from form submissions)
app.use(express.urlencoded({ extended: true }));

// Use the routes defined in the 'routes' folder
app.use(routes);

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
