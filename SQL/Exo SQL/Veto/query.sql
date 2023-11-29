-- "animals" est la table de gauche
-- "appointments" est la table de droite
SELECT * FROM animals
INNER JOIN appointments ON appointments.animal_id = animals.id;

-- "animals" est la table de gauche
-- "appointments" est la table de droite
SELECT 
	animals.id, animals.name, animals.species, animals.age,
    appointments.date, appointments.time
FROM animals
INNER JOIN appointments ON appointments.animal_id = animals.id;


-- "animals" est la table de gauche
-- "appointments" est la table de droite
SELECT 
	animals.id, animals.name, animals.species, animals.age,
    appointments.date, appointments.time
FROM animals
INNER JOIN appointments ON appointments.animal_id = animals.id
ORDER BY appointments.date DESC, appointments.time ASC;



-- "animals" est la table de gauche
-- "appointments" est la table de droite
SELECT 
	animals.id, animals.name, animals.species, animals.age,
    appointments.date, appointments.time
FROM animals
INNER JOIN appointments ON appointments.animal_id = animals.id
WHERE animals.age < 6
ORDER BY appointments.date DESC, appointments.time ASC;

-- "animals" est la table de gauche
-- "appointments" est la table de droite
SELECT 
	animals.id, animals.name, animals.species, animals.age,
    appointments.date, appointments.time, vets.name
FROM animals
INNER JOIN appointments ON appointments.animal_id = animals.id
INNER JOIN vets ON vets.id = appointments.vet_id;

