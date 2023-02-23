import express from 'express';
import { dbInsert, dbDelete, dbUpdate, dbSelect } from '../db/main.js';

const router = express.Router();

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  dbSelect(id).then((todo) => {
    res.send(todo);
  });
});

router.get('/', async (req, res) => {
  dbSelect().then((todos) => {
    res.send(todos);
  });
});

router.post('/', (req, res) => {
  const todo = req.body;
  dbInsert(todo).then(() => console.log('DB insert completed'));

  res.send(`Todo with description ${todo.description} added successfully`);
});

router.put('/', (req, res) => {
  const todo = req.body;
  dbUpdate(todo).then(() => console.log('DB update completed'));

  res.send(`Todo with id ${todo.id} updated successfully`);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  dbDelete(id).then(() => console.log('DB delete completed'));

  res.send(`Todo with id ${id} deleted successfully`);
});

export default router;
