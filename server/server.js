import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoutes.js'
const PORT = process.env.PORT || 4000
const app = express()

app.use(express.json())
//app.use(cors())
app.use(
  cors({
    origin: process.env.CLIENT_URL, // Replace with your frontend's URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    //credentials: true, // If you're using cookies
  })
);
await connectDB()

app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)
app.get('/', (req, res) => res.send("API Working"))

app.listen(PORT, () => console.log('Server running on port ' + PORT))
