const express =  require('express')
const morgan =  require('morgan')
const bodyParser =  require('body-parser')
const cors =  require('cors')
const mongoose =  require('mongoose')
require('dotenv').config()

const app = express()

//ROUTES
const postRoutes = require('./routes/post')
const authRoutes = require('./routes/auth')

//DB:
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true, 
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
.then(() =>console.log('DB connected'))
.catch(err =>console.log(err))

//MIDDLEWARES
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
//ROUTES MIDDLEWARE
app.use('/api', postRoutes);
app.use('/api', authRoutes);

//LISTEN:
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`App is listen on port ${port}`))