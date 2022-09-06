import express from "express"
import mongoose from "mongoose"
import dotenv from 'dotenv'
import multer from 'multer';
import cors from 'cors';
import fs from 'fs';

import { registerValidation, loginValidation, postCreateValidation } from './validations/validations.js'

import { handleValidationErrors, checkAdmin } from './utils/index.js';
import { AdminController, PostController } from './controllers/index.js';


dotenv.config()

const PORT = process.env.PORT || 4444
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@bijutier.pdm5kuq.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`)
.then ( () => console.log('DB ok') )
.catch( (err) => console.log('DB error', err) )

const app = express()
app.use(express.json())

// Image upload
const storage = multer.diskStorage({
    destination: (_, __, cb) => {
      if (!fs.existsSync('uploads')) {
        fs.mkdirSync('uploads');
      }
      cb(null, 'uploads');
    },
    filename: (_, file, cb) => {
      cb(null, file.originalname);
    },
  });

const upload = multer({
    storage
});

app.use(cors());
app.use('/uploads', express.static('uploads'));

// Admin
app.post('/auth/register', registerValidation, handleValidationErrors, AdminController.register)
app.post('/auth/login', loginValidation, handleValidationErrors, AdminController.login)
app.get('/auth/admin', checkAdmin, AdminController.getAdmin)

// Posts
app.post('/upload', checkAdmin, upload.single('image'), (req, res) => {
  res.json({
      url: `/uploads/${req.file.originalname}`,
  });
});

app.get('/posts', PostController.getAll);
app.get('/tags', PostController.getLastTags);
app.get('/posts/:id', PostController.getOne);
app.post('/posts', checkAdmin, postCreateValidation, handleValidationErrors, PostController.create);
app.delete('/posts/:id', checkAdmin, PostController.remove);
app.patch('/posts/:id', checkAdmin, postCreateValidation, handleValidationErrors, PostController.update);

app.listen(PORT, (err) => {
    if (err) {
        return console.log(err)
    }

    console.log('Server OK')
})

app.get('/', (req, res) => {
    res.send('Server')
})