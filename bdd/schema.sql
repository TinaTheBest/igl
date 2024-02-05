-- Création de la table Account
CREATE TABLE Account (
    id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(20) NOT NULL,
    status VARCHAR(20) NOT NULL
);

-- Création de la table Document
CREATE TABLE Document (
    id VARCHAR(50) PRIMARY KEY
);

-- Création de la table de liaison Many-to-Many pour les favoris des utilisateurs
CREATE TABLE Favoris (
    user_id VARCHAR(10),
    doc_id VARCHAR(50),
    PRIMARY KEY (user_id, doc_id),
    FOREIGN KEY (user_id) REFERENCES Account(id),
    FOREIGN KEY (doc_id) REFERENCES Document(id)
);