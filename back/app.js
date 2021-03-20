const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const dotenv = require('dotenv');

const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const db = require('./models');
const passportConfig = require('./passport');

dotenv.config();
const app = express();
db.sequelize.sync()
    .then(() => {
        console.log('db 연결 성공');
    })
    .catch(console.error);
passportConfig();

app.use(cors({
    origin: 'http://localhost:3060',
    credentials: true,
}));
app.use(express.json()); //fe에서 json으로 보내주는 데이터 처리
app.use(express.urlencoded({ extended: true })); //form에서 데이터를 보낼때 데이터 처리
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
}));
app.use(passport.initialize());
app.use(passport.session());


app.get('/', (req, res) => {
    res.send('hello express');
});

app.get('/', (req, res) => {
    res.send('hello api');
});

app.get('/posts', (req, res) => {
    res.json([
        { id: 1, content: 'hello' },
        { id: 2, content: 'hello' },
        { id: 3, content: 'hello' },
    ]);
});

app.use('/post', postRouter);
app.use('/user', userRouter);



app.listen(3065, () => {
    console.log('서버 실행 중!!');
});