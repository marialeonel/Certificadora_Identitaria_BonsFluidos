require('dotenv').config();
const express = require('express');
const sequelize = require('./database/bd');
const xssClean = require('xss-clean');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const path = require('path');

const app = express();

const corsOptions = {
    origin: ['http://localhost:5173', 'http://localhost:3000'], 
    methods: 'GET,POST,PUT,DELETE', 
    credentials: true 
};

app.use(xssClean());
app.use(helmet());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use('/uploads', cors(corsOptions), express.static(path.join(__dirname, 'uploads')));

//limiter
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 100,
    message: 'Too many requests from this IP, please try again later.'
});

app.use(limiter);

//routes
var loginRouter = require('./controllers/login');
var postsRouter = require('./controllers/posts');
app.use('/authentication', loginRouter);
app.use('/posts', postsRouter);

// start
app.get('/', (req, res) => {
    res.status(200).json({msg: 'welcome to the "Bons Fluidos" API'});
})

async function startServer() {
    try {
        await sequelize.authenticate(); 
        console.log('Connection to database has been established successfully.');

        await sequelize.sync({ force: true }); 
        console.log('Database synchronized.');

        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

startServer();