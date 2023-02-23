import { open } from 'sqlite';
import driver from 'sqlite3';

export async function getDBConnection() {
  try {
    const db = await open({
      filename: 'db.sqlite',
      driver: driver.Database,
    });

    if (!db) {
      throw new TypeError(`DB Connection expected, got: ${db}`);
    }

    return db;
  } catch (error) {
    console.error(
      `There was an error trying to connect to the DBMS: ${error.message}`,
      error
    );
  }
}

export async function initDB() {
  try {
    const db = await getDBConnection();

    await db.exec(`
      CREATE TABLE IF NOT EXISTS todos (
        id INTEGER PRIMARY KEY,
        title TEXT,
        description TEXT,
        is_done INTEGER DEFAULT 0
      )
    `);

    await db.close();
  } catch (error) {
    console.error(
      `There was an error trying to init the DB: ${error.message}`,
      error
    );
  }
}

export async function dbInsert(todo) {
  try {
    console.log(todo);
    const db = await getDBConnection();
    await db.exec(`
    INSERT INTO todos VALUES (${todo.id}, '${todo.title}', '${todo.description}', ${todo.is_done});
    `);

    await db.close();
  } catch (error) {
    console.error(
      `There was an error trying to init the DB: ${error.message}`,
      error
    );
  }
}

export async function dbDelete(id) {
  try {
    const db = await getDBConnection();
    await db.exec(`
    DELETE FROM todos WHERE id = ${id}
    `);

    await db.close();
  } catch (error) {
    console.error(
      `There was an error trying to init the DB: ${error.message}`,
      error
    );
  }
}

export async function dbUpdate(todo) {
  try {
    console.log(todo);
    const db = await getDBConnection();
    await db.exec(`
    UPDATE todos SET title = '${todo.title}', description = '${todo.description}', is_done = ${todo.is_done} where id = ${todo.id};
    `);

    await db.close();
  } catch (error) {
    console.error(
      `There was an error trying to init the DB: ${error.message}`,
      error
    );
  }
}

export async function dbSelect(id) {
  try {
    const db = await getDBConnection();
    let sql = ``;
    if (id) {
      sql = `SELECT * FROM todos where id = ${id}`;
      const todo = await db.all(sql);
      await db.close();
      console.log('SELECT on db main OK');
      return todo;
    } else {
      sql = `SELECT * FROM todos`;
      const todos = await db.all(sql);
      await db.close();
      console.log('SELECT on db main OK');
      return todos;
    }
  } catch (error) {
    console.error(
      `There was an error trying to init the DB: ${error.message}`,
      error
    );
  }
}
