-- WERKEN MET DE FABRIEK DB TIJDENS DE LES

-- SELECT FROM
SELECT * FROM klant;
SELECT naam, plaats FROM klant;
SELECT plaats, naam 
FROM klant;

-- WHERE
SELECT * FROM klant
WHERE plaats = 'Amersfoort';
SELECT * FROM artikel
WHERE adviesprijs > 5;
-- gebruiken enkele quotes
INSERT INTO klant
VALUES (99999, 'Kees', 'straatnaam', '''s-Hertogenbosch');
select * from klant
WHERE plaats = '''s-Hertogenbosch';

-- SubOpdracht 1
-- 1 Zoek het klantnr van klant met de naam Staal uit Amsterdam
select * from klant
WHERE naam = 'Staal'; 
-- 122

-- 2 Hoeveel bestellingen heeft Staal gedaan?
select * from bestelling
WHERE klantnr = 122;
-- 1 bestelling betstnr 124

-- 3 Welke artikelen heeft Staal besteld op 2003-05-04?
select * from besteldartikel
WHERE bestnr = 124;
-- artnrs 122 en 124
select * from artikel
WHERE artnt = 122 OR artnr = 124;
-- high light pen en nietmachine

-- DISTINCT
SELECT DISTINCT plaats FROM klant;

-- LIKE
SELECT * FROM klant WHERE naam LIKE 'S%';

SELECT * FROM klant WHERE adres LIKE '%straat%';

SELECT * FROM artikel WHERE naam LIKE '_O%';

SELECT artnr FROM voorraad WHERE fabnr LIKE '%2%';

-- zoek de artnr die op voorraad zijn in een fabriek waar fabnr een 2 heeft
SELECT artnr, fabnr FROM voorraad
WHERE CAST(fabnr AS TEXT) LIKE '%2%';

-- ORDER BY
SELECT * FROM klant
ORDER BY plaats, adres;

-- GROUP BY
SELECT fabnr, count(klantnr) FROM bestelling
GROUP BY fabnr
ORDER BY fabnr DESC;

-- LIMIT
SELECT * FROM artikel
ORDER BY adviesprijs DESC
LIMIT 5;

-- IS NULL en IS NOT NULL
SELECT * FROM artikel
WHERE naam IS NOT NULL;

-- miniopdracht 2
-- 1 Haal de 3 klanten op die met hun naam als eerst voorkomen in het alfabet
SELECT * FROM klant
ORDER BY naam
LIMIT 3;

-- 2 Hoeveel high light pennen zijn besteld? (gebruik sum)
SELECT * FROM artikel;

SELECT artnr, SUM(aantal) FROM besteldartikel
WHERE artnr = 122
GROUP BY artnr;

SELECT artnr, aantal FROM besteldartikel
WHERE artnr = 122;

-- INSERT INTO
INSERT INTO artikel (artnr, naam, adviesprijs)
VALUES
(201, 'Cartman Bubblehead', 12.50),
(202, 'Bruce Lee Bubblehead', 12.50),
(203, 'Elon Bubblehead', 12.50);

-- UPDATE
UPDATE klant
SET adres = 'Atoomweg 1'
WHERE klantnr = 121;

SELECT * FROM klant
WHERE klantnr = 121;

UPDATE artikel
SET adviesprijs = adviesprijs + 1
WHERE adviesprijs > 5;

SELECT * FROM artikel;


-- DELETE
DELETE FROM klant
WHERE klantnr = 99999;


-- EXTRA OPDRACHT
-- 1 Toon de verschillende filialen (toon filiaalnummer, adres en plaats) waar een klant
-- met klantnummer 543214 (klantnr Pieter) aankopen heeft gedaan en op welke datum.
SELECT DISTINCT f.filiaalnummer, f.adres, f.plaats
FROM filiaal f
INNER JOIN transactie t ON t.filiaalnummer = f.filiaalnummer
INNER JOIN klant k ON t.klantnummer = k.klantnummer
WHERE  k.klantnummer = 341234;

-- 2 Toon het totaalbedrag dat de klant met klantnummer 432210 heeft besteed aan aankopen.
-- Je hoeft dus alleen het totaalbedrag (1 waarde) te tonen, niet wat of wie of wanneer.
SELECT sum(a.aantal*p.prijs) AS totaalbedrag 
FROM aankoop a 
inner join product p on p.productnummer = a.product 
inner join transactie t on t.transactienummer = a.transactienummer
inner join klant k on k.klantnummer = t.klantnummer
WHERE k.klantnummer = 432210;

-- 3 Toon de hoeveelheid dat 'planken' is verkocht in de maand december 2022 per Filiaal.
SELECT f.plaats, sum(a.aantal) AS totaal_gekocht
FROM product p
inner join aankoop a on a.product = p.productnummer
inner join transactie t on t.transactienummer = a.transactienummer
inner join filiaal f on f.filiaalnummer = t.filiaalnummer
WHERE t.datum <= '2022-12-31' and t.datum >= '2022-12-01'
AND p.omschrijving = 'plank'
GROUP BY f.plaats;

-- of: 
-- and t.datum between '2019-12-01' and '2019-12-31'
-- of 
-- and date_part('month', t.datum) = 12
-- of 
-- and extract('month' from t.datum) = 12