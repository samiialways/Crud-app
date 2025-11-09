// server.js
const app = require('./app.js');
const connectDB = require('./src/config/connection.js'); // src/ বাদ দাও
const dotenv = require('dotenv');

dotenv.config();
connectDB()
  .then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to DB:', err.message);
    process.exit(1);
  });