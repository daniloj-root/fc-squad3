import React from 'react';
import Routes from '~/routes';
import * as SQLite from 'expo-sqlite';

export default function Index() {
  const db = SQLite.openDatabase('database.db');

  db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
    console.log('Foreign keys turned on')
  );

  var sql = [
    `DROP TABLE IF EXISTS user;`,
    `DROP TABLE IF EXISTS task;`,
    `DROP TABLE IF EXISTS subtask;`,
    `DROP TABLE IF EXISTS category;`,
    `DROP TABLE IF EXISTS checklist;`,
    `DROP TABLE IF EXISTS checkbox;`,

    `create table if not exists user (
      nome text,
      picture text,
      email text,
      token text
    );`,

    `create table if not exists category (
            id integer primary key autoincrement,
            nome text
            colorhex text
            );`,

    `create table if not exists task (
            id integer primary key autoincrement,
            nome text,
            startDateTime text,
            endDateTime text,
            category_id int,
            father_task_id int,
            foreign key (category_id) references category (id)
            foreign key (father_task_id) references task (id)
            );`,

    `create table if not exists subtask (
      id integer primary key autoincrement,
      father_id int,
      nome text,
      startDateTime text,
      endDateTime text,
      foreign key (father_id) references task (id)
    );`,

    `create table if not exists checklist (
        id integer primary key autoincrement,
        nome text,
        done boolean
    );`,

    `create table if not exists checkbox (
      id integer primary key autoincrement,
      nome text,
      done boolean,
      checklist_id int,
      foreign key (checklist_id) references checklist (id)
    );`,
  ];

  db.transaction(
    (tx) => {
      for (var i = 0; i < sql.length; i++) {
        console.log('execute sql : ' + sql[i]);
        tx.executeSql(sql[i]);
      }
    },
    (error) => {
      console.log('error call back : ' + JSON.stringify(error));
      console.log(error);
    },
    () => {
      console.log('transaction complete call back ');
    }
  );

  return <Routes />;
}
