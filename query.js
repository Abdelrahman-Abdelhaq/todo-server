export const selectingAllNotes = 'SELECT * FROM notes ORDER BY id ASC'

export const selectingOneNote = 'SELECT * FROM notes WHERE id = $1'

export const addingNote = 'INSERT INTO notes (note_text) VALUES ($1) RETURNING *'

export const updatingNote = 'UPDATE notes SET note_text = $1, completed = $2 WHERE id = $3 RETURNING *'

export const deleteingNote = 'DELETE FROM notes WHERE id = $1 RETURNING *'