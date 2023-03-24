CREATE DATABASE pernstack_todolist;

CREATE TABLE todo(
todo_id SERIAL PRIMARY KEY,
description VARCHAR(255)
);