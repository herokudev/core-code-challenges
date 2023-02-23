import cors from 'cors';
import express from 'express';
import todosRoutes from './routes/todos.js';
import dbTodosRoutes from './routes/dbtodos.js';
import { initDB } from './db/main.js';

const api = express();

const apiPort = process.env['APP_ENV'] || 5000;

api.use(cors());
api.use(express.json());
api.use('/todos', todosRoutes);
api.use('/dbtodos', dbTodosRoutes);
api.use(express.urlencoded({ extended: false }));

api.get('/', (req, res) => res.send("This is the TODO's Home Page."));

api.listen(apiPort, () => {
  console.log(`API RUNNNIG ON PORT ${apiPort}`);
  initDB().then(() => console.log('DB INITIALIZED :)'));
});
