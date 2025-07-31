import { addingNote, deleteingNote, selectingAllNotes, selectingOneNote, updatingNote } from "./query.js";
import {pool} from './db.js';

export const allNotes = async (req, res) => {
  try {
    const result = await pool.query(selectingAllNotes);
    res.json(result.rows);
  } catch (error) {
    console.error('GET /notes error:', error.message);
    res.status(500).json({ error: 'Failed to fetch notes' });
  }
}

export const oneNote = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(selectingOneNote, [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Note not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error('GET /notes/:id error:', error.message);
    res.status(500).json({ error: 'Failed to fetch note' });
  }
}

export const addNote = async (req, res) => {
  try {
    const { note_text } = req.body;
    if (!note_text) {
      return res.status(400).json({ error: 'Text is required' });
    }
    const result = await pool.query(
      addingNote,
      [note_text]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('POST /notes error:', error.message);
    res.status(500).json({ error: 'Failed to create note' });
  }
}

export const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { note_text, completed } = req.body;
    const result = await pool.query(
      updatingNote,
      [note_text, completed, id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error('PUT /notes/:id error:', error.message);
    res.status(500).json({ error: 'Failed to update note' });
  }
};


export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      deleteingNote,
      [id]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Note not found' });
    }
    
    res.json({ message: 'Note deleted successfully' });
  } catch (error) {
    console.error('DELETE /notes/:id error:', error.message);
    res.status(500).json({ error: 'Failed to delete note' });
  }
}