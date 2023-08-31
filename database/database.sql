CREATE DATABASE firstapi;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30),
    email TEXT
);

INSERT INTO users (name, email) VALUES 
    ('Chris', 'chri@mail.com'),
    ('Allani', 'allanis@mail.com');