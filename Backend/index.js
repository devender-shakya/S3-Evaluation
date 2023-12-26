const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const noticeRoutes = require('./routes/noticeRoutes');

require('dotenv').config();
const app = express();
mongoose.connect(`${process.env.MONGODB_URI}/noticeboard`, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/notices', noticeRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
