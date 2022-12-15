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