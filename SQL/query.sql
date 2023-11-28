-- Ceci est un commentaire !

-- CREATION D'UNE BASE DE DONNEES
-- Par convention, le nom est en minuscules, sans caractères spéciaux, ni chiffres, ni espaces. On remplacera les espaces par un underscore _.
CREATE DATABASE ma_base_de_donnees;

-- Pour éviter toute erreur lors de la création si celle-ci existe déjà
CREATE DATABASE IF NOT EXISTS ma_base_de_donnees;


       -- SUPPRESSION D'UNE BASE DE DONNEES
-- Supprimer une base de données
-- ACTION IRREVERSIBLE !
DROP DATABASE ma_base_de_donnees;
DROP DATABASE IF EXISTS ma_base_de_donnees;


-- CREATION D'UNE TABLE SQL
-- VARCHAR() sans chiffre entre les parenthèses limite auto. à 255 caractères (Texte)
-- INT = Chiffre, nombre
-- TEXT = Aucune limite de caractères
CREATE TABLE ma_table (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(35),
    prenom VARCHAR(40),
    age INT,
    adresse TEXT
);


-- MODIFICATION D'UNE TABLE SQL
-- Ajout d'une colonne
ALTER TABLE ma_table ADD id INT NOT NULL PRIMARY KEY AUTO_INCREMENT;

-- Suppression d'une colonne
ALTER TABLE ma_table DROP adresse;

-- Modification d'un type de colonne
ALTER TABLE ma_table MODIFY nom VARCHAR(50);

-- Modification d'un type de colonne
-- Dans la table "mon_autre_table", ajouter la colonne "adresse" (je vous laisse choisir le type)
ALTER TABLE mon_autre_table ADD adresse TEXT;

-- Dans la table "ma_table", changer les noms des colonnes "nom" et "prenom" par "lastname" et "firstname"
ALTER TABLE ma_table
    CHANGE nom lastname VARCHAR(50),
    CHANGE prenom firstname VARCHAR(45)
;


-- VIDER LE CONTENU D'UNE TABLE
-- Cette commande a pour effet de réinitialiser l'auto-incrément de la table, si celle-ci en possède un
TRUNCATE TABLE ma_table;

-- SUPPRIMER UNE TABLE SQL (Action irréversible !)
DROP TABLE ma_table;
DROP IF EXISTS TABLE ma_table;


-- INSERTION DE DONNEES
-- Insérer des données dans une table SQL
-- Respecter l'ordre des colonnes !
INSERT INTO ma_table (lastname, firstname, age) VALUES ('Doe', 'John', 26);

-- ou
-- Mettre "NULL" pour la colonne "id" afin qu'elle génère sa propre valeur
INSERT INTO ma_table VALUES (NULL, 'Doe', 'John', 26);

-- Insérer plusieurs enregistrement en une seule requête SQL
INSERT INTO ma_table (lastname, firstname, age) VALUES
    ('Doe', 'John', 26),
    ('Doe', 'Jane', 29),
    ('Martine', 'Martin', 44)
;


-- SUPPRIMER UN ENREGISTREMENT
-- Le "WHERE" doit être mis, sans quoi TOUTES les données seront effacées
DELETE FROM ma_table WHERE id = 3;

-- Tous les enregistrements ayant pour valeur "Doe" dans la colonne "lastname" seront supprimés
DELETE FROM ma_table WHERE lastname = 'Doe';

-- Tous les enregistrements ayant pour valeur "Doe" dans la colonne "lastname" ET dont l'âge est supérieur à 20 ans seront supprimés
DELETE FROM ma_table WHERE lastname = 'Doe' AND age > 20;

-- La commande TRUNCATE réinitialise l'auto-incrément de l'ID, si la table en possède un, tandis que la commande DELETE ne réinitialise pas l'auto-incrément.
TRUNCATE TABLE ma_table;
DELETE FROM ma_table;

-- METTRE A JOUR UN ENREGISTREMENT
-- UPDATE ma_table SET age = 32 WHERE id = 8
UPDATE ma_table SET age = 32 WHERE lastname = 'Martine' AND firstname = 'Martin';

-- tout comme la commande DELETE et la commande UPDATE, ne pas oublier la condition WHERE ! Sinon, toutes les données
-- de la table en seront impactées


-- SELECTION DE DONNEES
-- Sélectionne toutes les données de la table
SELECT * FROM ma_table;

-- Sélectionne toutes les données de la table avec seulement les colonnes "lastname" et "age"
SELECT lastname, age FROM ma_table;

-- Sélectionne toutes les données de la table avec seulement les colonnes "lastname" et "age" (possibilité de choisir l'ordre des colonnes)
SELECT age, lastname FROM ma_table;

-- Sélectionner avec un filtre
SELECT age, lastname FROM ma_table WHERE lastname = 'Doe';

-- Les 2 conditions doivent être exactes
SELECT age, lastname FROM ma_table WHERE lastname = 'Doe' AND age < 20;

-- Un des 2 conditions doit être exacte
SELECT age, lastname FROM ma_table WHERE lastname = 'Doe' OR age < 20;

-- ORDRER LES RESULTATS
SELECT * FROM ma_table ORDER BY age ASC; -- Du plus petit au plus grand
SELECT * FROM ma_table ORDER BY age DESC; -- Du plus grand au plus petit

-- LIMITER LES RESULTATS
-- Limit de résultats avec offset
SELECT * FROM ma_table LIMIT 2 OFFSET 1;

-- Attention, avec la virgule, l'information est inversé, l'offset en première position
SELECT * FROM ma_table LIMIT 1, 2;


-- ORDRE DE LA REQUETE
SELECT * FROM ma_table
WHERE condition
ORDER BY colonne
LIMIT nombre
