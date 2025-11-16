import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import botRoutes from './routes/botRoutes.js';
import cors from 'cors';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("MongoDB Connection Error:", err));

app.use(express.json());
app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
}));


// Routes
app.use('/api/bot', botRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
