SELECT * FROM artikel
WHERE adviesprijs > 2;

SELECT * FROM voorraad
WHERE vrd < minvrd;

SELECT vrd AS total_stock FROM voorraad AS stock;

SELECT fabnr, artnr, vrd - minvrd AS tekort
FROM artikel
WHERE vrd - minvrd < 0;

SELECT * FROM artikel
WHERE adviesprijs < 2 OR adviesprijs > 5;

SELECT * FROM artikel
WHERE adviesprijs > 2 AND adviesprijs < 5;

SELECT * FROM artikel
WHERE adviesprijs BETWEEN 2 AND 5;

SELECT * FROM bestelling
WHERE datum BETWEEN '2003-10-01' AND '2003-10-31';

SELECT * FROM bestelling
WHERE klantnr != 124;

-- Geef alle klanten waarvan de naam niet begint met een a, b en niet een c
SELECT * FROM klant
WHERE naam NOT LIKE 'A%' AND naam NOT LIKE 'B%' AND naam NOT LIKE 'C%';

SELECT avg(adviesprijs) AS mediaan_prijs FROM artikel;

SELECT plaats, count(plaats) AS totaal_fab_plaats
FROM fabriek
GROUP BY plaats;

-- 1 toon alle klanten die vaker dan 1 heeft besteld . toon klant nr en totaal aantal keer besteld
SELECT klantnr, count(bestnr) AS totaal_aantal_keer_besteld
FROM bestelling
GROUP BY klantnr
HAVING count(bestnr) > 1;


-- 2 toon hoevaak klanten gemiddeld bestellen
SELECT avg(count) FROM (SELECT klantnr, count(bestnr) AS count FROM bestelling GROUP BY klantnr)
a;



-- toon van klant met naam Groot van alle bestelde artikelen de naam en de hoeveel hij heeft besteld
SELECT k.naam, a.naam, sum(ba.aantal)
FROM klant k
JOIN bestelling b ON k.klantnr = b.klantnr
JOIN besteldartikel ba ON ba.bestnr = b.bestnr
JOIN artikel a ON a.artnr = ba.artnr
GROUP BY k.naam, a.naam
HAVING k.naam = 'Groot'
; 

-- OF

SELECT k.naam, a.naam, sum(ba.aantal)
FROM klant k
JOIN bestelling b ON k.klantnr = b.klantnr
JOIN besteldartikel ba ON ba.bestnr = b.bestnr
JOIN artikel a ON a.artnr = ba.artnr
WHERE k.naam = 'Groot'
GROUP BY k.naam, a.naam
;



SELECT a.naam, count(a2.adviesprijs)
FROM artikel a
INNER JOIN artikel a2 ON a.adviesprijs < a2.adviesprijs
WHERE a.naam = 'post-its'
GROUP BY a.naam;


DROP TABLE IF EXISTS test;

CREATE TABLE test (
	ISBN BIGINT PRIMARY KEY,
	ISBN2 NUMERIC(13),
	ISBN3 VARCHAR(13)
);

insert into test
VALUES
(9789463561143, 9789463561143, '9789463561143');

SELECT * FROM test;

-- Name	Storage 	Size		Range
-- smallint			2 bytes		-32768 to +32767
-- integer			4 bytes		-2147483648 to +2147483647
-- bigint			8 bytes		-9223372036854775808 to +9223372036854775807