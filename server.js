import express from "express";
import cors from "cors";
import { allNotes, oneNote, addNote, updateNote, deleteNote } from "../controllers.js"; 
import { pool } from "../db.js"; 

const app = express();

app.use(cors());
app.use(express.json());

app.get("/notes", allNotes);
app.get("/notes/:id", oneNote);
app.post("/notes", addNote);
app.put("/notes/:id", updateNote);
app.delete("/notes/:id", deleteNote);

export default app;
