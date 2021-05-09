CREATE TABLE IF NOT EXISTS virtual_shop (
    id serial PRIMARY KEY,
    name varchar NOT NULL,
    category varchar NOT NULL,
    price varchar NOT NULL
);