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

