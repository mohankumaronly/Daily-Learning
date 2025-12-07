const express = require('express');
require('dotenv').config();
const DatabaseConnection = require('./config/db');
const cors = require('cors');
const authRouter = require('./router/userAuthRouter');

const app = express();

const PORT = process.env.PORT || 8000;

const URI = process.env.DATABASE_URI;

DatabaseConnection(URI);

app.use(express.json());
app.use(cors());

// api Router this 

app.use('/api', authRouter);

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});