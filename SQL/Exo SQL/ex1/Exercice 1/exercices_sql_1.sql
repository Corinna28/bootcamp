-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : jeu. 07 jan. 2021 à 08:08
-- Version du serveur :  5.7.32
-- Version de PHP : 7.4.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `exercices_sql_1`
--

-- --------------------------------------------------------

--
-- Structure de la table `etudiants`
--

CREATE TABLE `etudiants` (
  `id` int(11) NOT NULL,
  `nom` varchar(30) DEFAULT NULL,
  `prenom` varchar(30) DEFAULT NULL,
  `sexe` varchar(5) DEFAULT NULL,
  `ville` varchar(30) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `arriver_le` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `etudiants`
--

INSERT INTO `etudiants` (`id`, `nom`, `prenom`, `sexe`, `ville`, `age`, `arriver_le`) VALUES
(2, 'Charles', 'Sylvie', 'Femme', 'Auxerre', 23, '2018-11-23'),
(3, 'Cerneau', 'Mathilde', 'Femme', 'Agen', 18, '2019-09-12'),
(4, 'Antoine', 'Marc', 'Homme', 'Caen', 21, '2019-03-01'),
(5, 'Bertrand', 'Edmond', 'Homme', 'Bordeaux', 26, '2017-07-14'),
(6, 'Mercure', 'Sylvie', 'Femme', 'Troyes', 24, '2018-05-08'),
(8, 'Alaplage', 'Martine', 'Femme', 'Troyes', 23, '2019-01-29'),
(9, 'Martin', 'Marc', 'Homme', 'Reims', 32, '2019-04-18');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `etudiants`
--
ALTER TABLE `etudiants`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `etudiants`
--
ALTER TABLE `etudiants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
