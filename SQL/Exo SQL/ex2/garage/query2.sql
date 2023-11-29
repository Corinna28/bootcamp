CREATE TABLE `voitures` (
  `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `marque` varchar(30),
  `modele` varchar(30),
  `annee` varchar(4),
  `garage_id` int 
)
CREATE TABLE `garages` (
  `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `adresse` varchar(255),
  `code_postal` varchar(5)
)
ALTER TABLE voitures
ADD CONSTRAINT fk_voitures_garage_id FOREIGN KEY (garage_id) REFERENCES garages(id);