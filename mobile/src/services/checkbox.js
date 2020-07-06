<<<<<<< HEAD
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('database.db');
=======
<<<<<<< HEAD
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('database.db');
export class TaskService {
  static addData(param) {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            `insert into task (name, startDateTime, endDateTime, active) 
                values (?)`,
            [
              param.name,
              param.startDateTime,
              param.endDateTime,
              param.active,
            ],
            (_, { insertId, rows }) => {
              console.log('id insert: ' + insertId);
              resolve(insertId);
            }
          ),
            (sqlError) => {
              console.log(sqlError);
            };
        },
        (txError) => {
          console.log(txError);
        }
      )
    );
  }

  static findById(id) {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            `select t.name, t.active, t.startDateTime, t.endDateTime
                           from subtask as t
                           where id= ?`,
            [id],
            (_, { rows }) => {
              resolve(rows);
            }
          ),
            (sqlError) => {
              console.log(sqlError);
            };
        },
        (txError) => {
          console.log(txError);
        }
      )
    );
  }

  static getAll() {
    let sql = `SELECT t.nome, t.active, t.startDateTime, t.endDateTime
  FROM subtask as t
  INNER JOIN category as c`;

    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          console.log('get all tasks : ' + sql);
          return (
            tx.executeSql(sql, [], (_, { rows }) => {
              resolve(rows);
            }),
            (sqlError) => {
              console.log(sqlError);
            }
          );
        },
        (txError) => {
          console.log(txError);
        }
      )
    );
  }

  static updateById(params) {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            `update subtask set ? = ? where id = ?;`,
            [param.param, param.value, param.id],
            () => {}
          ),
            (sqlError) => {
              console.log(sqlError);
            };
        },
        (txError) => {
          console.log(txError);
        }
      )
    );
  }

  static deleteById(id) {
    db.transaction(
      (tx) => {
        tx.executeSql(
          `delete from subtask where id = ?;`,
          [id],
          (_, { rows }) => {}
        ),
          (sqlError) => {
            console.log(sqlError);
          };
      },
      (txError) => {
        console.log(txError);
      }
    );
  }
}
=======
>>>>>>> db46140b2024aca178725a8f536be97e70dc9b7a
>>>>>>> 3a7e05a26bdc6ea6cfdd628353512a45309d4efa