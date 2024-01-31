// Import routes
const { app } = require('./app');
const mainRouter = require('./routes/mainRoute');

// Import middleware

// Main Routes
app.use(mainRouter);