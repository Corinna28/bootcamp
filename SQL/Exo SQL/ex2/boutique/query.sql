--Créer les tables suivantes :

-- Article
-- ID PRIMARY KEY
-- Titre VARCHAR(70)
-- Contenu TEXT
-- Créer le DATE

-- Commentaire
-- ID PRIMARY KEY
-- Commentaire TEXT
-- Ajouter le DATE

-- Catégorie
-- ID PRIMARY KEY
-- Nom VARCHAR(60)

-- Créer les relations nécessaires entre les tables

-- Article table
CREATE TABLE Article (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Titre VARCHAR(70),
    Contenu TEXT,
    CreatedAt DATE
);

-- Commentaire table
CREATE TABLE Commentaire (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Commentaire TEXT,
    CreatedAt DATE,
    ArticleID INT,
    FOREIGN KEY (ArticleID) REFERENCES Article(ID)
);

-- Catégorie table
CREATE TABLE Categorie (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Nom VARCHAR(60)
);

-- Table de relations article-catégorie
CREATE TABLE ArticleCategorie (
    ArticleID INT,
    CategorieID INT,
    PRIMARY KEY (ArticleID, CategorieID),
    FOREIGN KEY (ArticleID) REFERENCES Article(ID),
    FOREIGN KEY (CategorieID) REFERENCES Categorie(ID)
);

-- Insérer des données fictives dans la table Article
INSERT INTO Article (Titre, Contenu, CreatedAt)
VALUES
    ('Titre de l''article 1', 'Contenu de l''article 1.', '2023-01-01'),
    ('Titre de l''article 2', 'Contenu de l''article 2.', '2023-01-02'),
    ('Titre de l''article 3', 'Contenu de l''article 3.', '2023-01-03'),
    ('Titre de l''article 4', 'Contenu de l''article 4.', '2023-01-04'),
    ('Titre de l''article 5', 'Contenu de l''article 5.', '2023-01-05'),
    ('Titre de l''article 6', 'Contenu de l''article 6.', '2023-01-06'),
    ('Titre de l''article 7', 'Contenu de l''article 7.', '2023-01-07'),
    ('Titre de l''article 8', 'Contenu de l''article 8.', '2023-01-08'),
    ('Titre de l''article 9', 'Contenu de l''article 9.', '2023-01-09'),
    ('Titre de l''article 10', 'Contenu de l''article 10.', '2023-01-10'),
    ('Titre de l''article 11', 'Contenu de l''article 11.', '2023-01-11'),
    ('Titre de l''article 12', 'Contenu de l''article 12.', '2023-01-12'),
    ('Titre de l''article 13', 'Contenu de l''article 13.', '2023-01-13'),
    ('Titre de l''article 14', 'Contenu de l''article 14.', '2023-01-14'),
    ('Titre de l''article 15', 'Contenu de l''article 15.', '2023-01-15');




-- Lister tous les articles ainsi que les catégories associées :

SELECT Article.*, Categorie.Nom AS NomCategorie
FROM Article
LEFT JOIN ArticleCategorie ON Article.ID = ArticleCategorie.ArticleID
LEFT JOIN Categorie ON ArticleCategorie.CategorieID = Categorie.ID;



-- Lister tous les articles ainsi que les commentaires associés :

SELECT Article.*, Commentaire.Commentaire
FROM Article
LEFT JOIN Commentaire ON Article.ID = Commentaire.ArticleID;

-- Lister tous les articles ainsi que les catégories et commentaires associés :

SELECT Article.*, Categorie.Nom AS NomCategorie, Commentaire.Commentaire
FROM Article
LEFT JOIN ArticleCategorie ON Article.ID = ArticleCategorie.ArticleID
LEFT JOIN Categorie ON ArticleCategorie.CategorieID = Categorie.ID
LEFT JOIN Commentaire ON Article.ID = Commentaire.ArticleID;


-- Lister tous les commentaires et l’ID de l’article associé (Renommer l’ID de l’article en « articleId » pour l’affichage des résultats, utiliser pour cela un alias) :

SELECT Commentaire.*, Article.ID AS articleId
FROM Commentaire
LEFT JOIN Article ON Commentaire.ArticleID = Article.ID;


-- Sélectionner le titre, la date de création de l’article et le nom de la catégorie étant reliés à la catégorie 2 :


SELECT Article.Titre, Article.CreatedAt, Categorie.Nom AS NomCategorie
FROM Article
LEFT JOIN ArticleCategorie ON Article.ID = ArticleCategorie.ArticleID
LEFT JOIN Categorie ON ArticleCategorie.CategorieID = Categorie.ID
WHERE Categorie.ID = 2;
