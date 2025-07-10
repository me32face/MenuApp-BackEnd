const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use('/api/menu', require('./routes/menu'));

app.get('/', (req, res) => res.send("API Running"));

app.listen(5000, () => console.log("Server running on port 5000"));
