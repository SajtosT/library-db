CREATE TABLE library (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    isbn VARCHAR(20) UNIQUE NOT NULL,
    publication_year INT CHECK (publication_year >= 0),
    publisher TEXT
);