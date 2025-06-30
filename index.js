const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: 'https://blok-ly.vercel.app', //frontend origin
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));


app.get('/', (req, res) => {
  res.send('✨BlokLy Backend is running!🚀🚀🌟💫')
});

// Routes
const connectRoute = require('./routes/connect');
app.use('/api/connect', connectRoute);

const spacesRoute = require('./routes/spaces');
app.use('/api/spaces', spacesRoute);

const projectRoutes = require('./routes/projects');
app.use('/api/projects', projectRoutes);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
