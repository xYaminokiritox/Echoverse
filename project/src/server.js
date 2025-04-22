import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { registerUser, loginUser } from './services/authService.js';
import User from './models/User.js';
import mongoose from 'mongoose';

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

// Auth routes
app.post('/api/auth/register', async (req, res) => {
  try {
    const user = await registerUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await loginUser(email, password);
    res.json(user);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

// User routes
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Echoverse collection routes
app.get('/api/echoverse', async (req, res) => {
  try {
    // Get the echoverse collection directly
    const db = mongoose.connection.db;
    const echoverseCollection = db.collection('echoverse');
    const documents = await echoverseCollection.find({}).toArray();
    res.json(documents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/echoverse', async (req, res) => {
  try {
    // Add a document to the echoverse collection
    const db = mongoose.connection.db;
    const echoverseCollection = db.collection('echoverse');
    const result = await echoverseCollection.insertOne(req.body);
    res.status(201).json({ 
      message: 'Document added successfully', 
      documentId: result.insertedId 
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/api/echoverse/:id', async (req, res) => {
  try {
    // Get a specific document from the echoverse collection
    const db = mongoose.connection.db;
    const echoverseCollection = db.collection('echoverse');
    const document = await echoverseCollection.findOne({ 
      _id: new mongoose.Types.ObjectId(req.params.id) 
    });
    
    if (!document) {
      return res.status(404).json({ message: 'Document not found' });
    }
    
    res.json(document);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 