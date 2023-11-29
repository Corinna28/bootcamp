-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 29 nov. 2023 à 10:06
-- Version du serveur : 10.4.28-MariaDB
-- Version de PHP : 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `garageex2`
--

-- --------------------------------------------------------

--
-- Structure de la table `garage`
--

CREATE TABLE `garage` (
  `ID` int(11) NOT NULL,
  `Adresse` varchar(255) DEFAULT NULL,
  `CodePostal` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `garage`
--

INSERT INTO `garage` (`ID`, `Adresse`, `CodePostal`) VALUES
(1, '20 Rue de la Paix', '80000'),
(2, '15 Boulevard Victor Hugo', '39000'),
(3, '8 Rue du Faubourg', '59100'),
(4, '12 Rue de la Gare', '89000'),
(5, '30 Avenue Foch', '19100'),
(6, '5 Rue des Lilas', '69200');

-- --------------------------------------------------------

--
-- Structure de la table `voiture`
--

CREATE TABLE `voiture` (
  `ID` int(11) NOT NULL,
  `Marque` varchar(30) DEFAULT NULL,
  `Modele` varchar(30) DEFAULT NULL,
  `Annee` varchar(4) DEFAULT NULL,
  `GarageID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `voiture`
--

INSERT INTO `voiture` (`ID`, `Marque`, `Modele`, `Annee`, `GarageID`) VALUES
(101, 'Renault', 'Clio', '2020', 1),
(102, 'Peugeot', '208', '2019', 2),
(103, 'Citroën', 'C3', '2022', 3),
(104, 'Renault', 'Megane', '2021', 1),
(105, 'Peugeot', '308', '2020', 4),
(106, 'Citroën', 'C4', '2019', 5),
(107, 'Renault', 'Captur', '2022', 6),
(108, 'Peugeot', '3008', '2021', 4);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `garage`
--
ALTER TABLE `garage`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `voiture`
--
ALTER TABLE `voiture`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `GarageID` (`GarageID`);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `voiture`
--
ALTER TABLE `voiture`
  ADD CONSTRAINT `voiture_ibfk_1` FOREIGN KEY (`GarageID`) REFERENCES `garage` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
