
--Créer une table SQL nommée « etudiants ».


CREATE TABLE etudiants (
    id INT PRIMARY KEY,
    Nom VARCHAR(50),
    Prenom VARCHAR(50),
    Sexe VARCHAR(5),
    Ville VARCHAR(30),
    Age INT,
    Arriver DATE
);


--Insérer quelques étudiants avant de continuer : 
-- • Jean , Talus, Homme, Bordeaux, 24, 02/02/2019
-- • Sylvie,  Charles, Femme, Auxerre, 23, 23/11/2018
-- • Mathilde,  Cerneau, Femme, Agen, 18, 12/09/2019
-- • Marc, Antoine, Homme, Bordeaux, 21, 01/03/2019
-- • Edmond, Bertrand, Homme, Bordeaux, 26, 14/07/2017
-- • Sylvie, Tarzan, Femme, Troyes, 24, 08/05/2018
-- • Henry, Ben, Homme, Lille, 20, 26/10/2017
-- • Martine, Alaplage, Femme, Troyes, 23, 29/01/2019


INSERT INTO etudiants (id, Nom, Prenom, Sexe, Ville, Age, Arriver)
VALUES 
    (1, 'Talus', 'Jean', 'Homme', 'Bordeaux', 24, '2019-02-02'),
    (2, 'Charles', 'Sylvie', 'Femme', 'Auxerre', 23, '2018-11-23'),
    (3, 'Cerneau', 'Mathilde', 'Femme', 'Agen', 18, '2019-09-12'),
    (4, 'Antoine', 'Marc', 'Homme', 'Bordeaux', 21, '2019-03-01'),
    (5, 'Bertrand', 'Edmond', 'Homme', 'Bordeaux', 26, '2017-07-14'),
    (6, 'Tarzan', 'Sylvie', 'Femme', 'Troyes', 24, '2018-05-08'),
    (7, 'Ben', 'Henry', 'Homme', 'Lille', 20, '2017-10-26'),
    (8, 'Alaplage', 'Martine', 'Femme', 'Troyes', 23, '2019-01-29');


--1. Lister tous les étudiants :

SELECT * FROM etudiants;

--2. Lister les 5 premiers étudiants :

SELECT * FROM etudiants LIMIT 5;

--3. Trier les étudiants par âge (du plus ancien au plus jeune) :

SELECT * FROM etudiants ORDER BY Age DESC;

--4. Mettre à jour l’étudiant « Marc Antoine » en modifiant sa ville par « Caen » :

UPDATE etudiants SET Ville = 'Caen' WHERE Nom = 'Antoine' AND Prenom = 'Marc';


--5. Lister les 3 derniers étudiants :

SELECT * FROM etudiants ORDER BY ID DESC LIMIT 3;

--6. Lister les deux étudiants les plus jeunes :

SELECT * FROM etudiants ORDER BY Age ASC LIMIT 2;


--7. Lister les 4 étudiants à partir de la 5ème position :

SELECT * FROM etudiants LIMIT 4 OFFSET 4;


--8. Supprimer les étudiants venant de « Lille » :

DELETE FROM etudiants WHERE Ville = 'Lille';


--9. Afficher la moyenne d’âge des étudiants :

SELECT AVG(Age) AS MoyenneAge FROM etudiants;


--10. Afficher la moyenne d’âge des étudiants de plus de 22 ans :

SELECT AVG(Age) AS MoyennePlusDe22 FROM etudiants WHERE Age > 22;


--11. Lister tous les étudiants sans doublons :

SELECT DISTINCT * FROM etudiants;

--12. Lister les étudiants (si existant) dont le prénom est : Charles, Martin, Sylvie, Paul :

SELECT * FROM etudiants WHERE Prenom IN ('Charles', 'Martin', 'Sylvie', 'Paul');

--13. Insérer un nouvel étudiant (à vous de choisir) :

INSERT INTO etudiants (Nom, Prenom, Sexe, Ville, Age, Arriver) VALUES ('Dave', 'LLOPPER', 'Homme', 'Amiens', 30, '2021-01-15');


--14. Lister les étudiants arrivés entre le 01/02/2019 et 05/03/2019 :

SELECT * FROM etudiants WHERE Arriver BETWEEN '2019-02-01' AND '2019-03-05';

--15. « Sylvie Tarzan » a changé de nom de famille pour « Mercure » :

UPDATE etudiants SET Nom = 'Mercure' WHERE Prenom = 'Sylvie' AND Nom = 'Tarzan';

--Jean Talus n’est plus un étudiant, le supprimer des résultats :

DELETE FROM etudiants WHERE Prenom = 'Jean' AND Nom = 'Talus';






