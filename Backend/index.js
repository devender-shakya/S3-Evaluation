const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/userRoutes');
const noticeRoutes = require('./routes/noticeRoutes');

const app = express();
app.use(express.json());

const startServer = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB Connected');

        // Setup routes
        app.use('/users', userRoutes);
        app.use('/notices', noticeRoutes);

        // Start the server
        const PORT = process.env.PORT || 8000;
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    } catch (err) {
        console.error('Failed to connect to MongoDB or start server:', err);
        process.exit(1); // Exit with a failure code
    }
};

startServer();
