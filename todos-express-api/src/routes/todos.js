import express from 'express';

const router = express.Router();

let todos = [
  {
    id: 0,
    title: '',
    description: '',
    is_done: 0,
  },
  {
    id: 1,
    title: '',
    description: '',
    is_done: 0,
  },
  {
    id: 2,
    title: '',
    description: '',
    is_done: 0,
  },
];

router.get('/', (req, res) => {
  res.send(todos);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const foundTodo = todos.filter((todo) => todo.id == id);
  res.send(foundTodo);
});

router.post('/', (req, res) => {
  const todo = req.body;
  todos.push(todo);

  res.send(`Todo with description ${todo.description} added successfully`);
});

router.put('/', (req, res) => {
  const todo = req.body;
  todos[todo.id] = todo;

  res.send(`Todo with id ${todo.id} updated successfully`);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const newTodos = todos.filter((todo) => todo.id != id);
  todos = newTodos;
  res.send(`Todo with id ${id} deleted successfully`);
});

export default router;
