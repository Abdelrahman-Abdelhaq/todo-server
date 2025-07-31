import express from 'express';
import cors from 'cors';
import {pool} from './db.js';
import { addNote, allNotes, deleteNote, oneNote, updateNote } from './controllers.js';

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json())

app.get('/notes', allNotes);

app.get('/notes/:id', oneNote);

app.post('/notes', addNote);

app.put('/notes/:id', updateNote);

app.delete('/notes/:id', deleteNote);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});