-- Lister toutes les voitures ainsi que l’adresse du garage associé

SELECT 
	voitures.*,
    garages.adresse
FROM voitures
INNER JOIN garages ON garages.id = voitures.garage_id;

--ou

SELECT
	voitures.*, 
    garages.adresse
FROM garages
INNER JOIN voitures ON voitures.garage_id = garages.id;

-- Lister tous les garages ainsi que les marques des voitures associé

SELECT
	garages.*,
	voitures.marque
FROM garages
INNER JOIN voitures ON voitures.garage_id = garages.id;


--ou


SELECT
	garages.*,
    voitures.marque
FROM voitures
INNER JOIN garages ON garages.id = voitures.garage_id;