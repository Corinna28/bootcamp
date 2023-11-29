-- INNER JOIN affiche tous les animaux qui possèdent un rendez-vous. Les animaux n'ayant pas
-- de rendez-vous, ne seront pas affichés dans les résultats
SELECT * FROM animals
INNER JOIN appointments ON appointments.animal_id = animals.id;

-- LEFT JOIN affiche tous les animaux qui possèdent ou pas un rendez-vous
SELECT * FROM animals 
LEFT JOIN appointments ON appointments.animal_id = animals.id;

-- RIGHT JOIN affiche tous les animaux qui possèdent un rendez-vous ainsi que des rendez-voud
-- qui n'ont pas d'animaux associés
SELECT * FROM animals 
RIGHT JOIN appointments ON appointments.animal_id = animals.id;


-- FULL JOIN ne fonctionne pas avec MySQL, l'équivalent est d'utiliser un LEFT JOIN et RIGHT JOIN
-- avec un UNION
-- UNION élimine les doublons
-- UNION ALL (prends les doublons aussi)
SELECT * FROM animals 
LEFT JOIN appointments ON appointments.animal_id = animals.id

UNION ALL

SELECT * FROM animals 
RIGHT JOIN appointments ON appointments.animal_id = animals.id;



------------------------------------------------------------------------------------------

SELECT * FROM animals
INNER JOIN appointments ON appointments.animal_id = animals.id
INNER JOIN vets ON vets.id = appointments.vet_id;


SELECT 
	animals.id, animals.name, animals.species,
    appointments.date, appointments.time,
    vets.name, vets.address, vets.phone
FROM animals
INNER JOIN appointments ON appointments.animal_id = animals.id
INNER JOIN vets ON vets.id = appointments.vet_id;

SELECT * FROM appointments
INNER JOIN animals ON animals.id = appointments.animal_id
INNER JOIN vets ON vets.id = appointments.vet_id;

SELECT * FROM appointments
INNER JOIN animals ON animals.id = appointments.animal_id
INNER JOIN vets ON vets.id = appointments.vet_id
WHERE appointments.date BETWEEN '2023-05-01' AND '2023-06-01';
