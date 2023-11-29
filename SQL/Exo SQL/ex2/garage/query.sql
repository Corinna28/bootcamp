

-- Création de la table Garage
CREATE TABLE Garage (
    ID INT PRIMARY KEY,
    Adresse VARCHAR(255),
    CodePostal VARCHAR(5)
);

-- Création de la table Voiture
CREATE TABLE Voiture (
    ID INT PRIMARY KEY,
    Marque VARCHAR(30),
    Modele VARCHAR(30),
    Annee VARCHAR(4),
    GarageID INT,
    FOREIGN KEY (GarageID) REFERENCES Garage(ID)
);


-- Insertion de garages 
INSERT INTO Garage (ID, Adresse, CodePostal) VALUES
(1, '20 Rue de la Paix', '80000'),
(2, '15 Boulevard Victor Hugo', '39000'),
(3, '8 Rue du Faubourg', '59100');
(4, '12 Rue de la Gare', '89000'),
(5, '30 Avenue Foch', '19100'),
(6, '5 Rue des Lilas', '69200');


-- Insertion de quelques voitures liées aux garages
INSERT INTO Voiture (ID, Marque, Modele, Annee, GarageID) VALUES
(101, 'Renault', 'Clio', '2020', 1),
(102, 'Peugeot', '208', '2019', 2),
(103, 'Citroën', 'C3', '2022', 3),
(104, 'Renault', 'Megane', '2021', 1);
(105, 'Peugeot', '308', '2020', 4),
(106, 'Citroën', 'C4', '2019', 5),
(107, 'Renault', 'Captur', '2022', 6),
(108, 'Peugeot', '3008', '2021', 4);


-- Liste de toutes les voitures avec l'adresse du garage associé 
SELECT V.ID, V.Marque, V.Modele, V.Annee, G.Adresse
FROM Voiture V
JOIN Garage G ON V.GarageID = G.ID;

-- Liste de tous les garages avec les marques des voitures associées
SELECT G.ID, G.Adresse, V.Marque
FROM Garage G
JOIN Voiture V ON G.ID = V.GarageID;

