DROP TABLE IF EXISTS aankoop;
DROP TABLE IF EXISTS transactie;
DROP TABLE IF EXISTS klant;
DROP TABLE IF EXISTS filiaal;
DROP TABLE IF EXISTS product;

CREATE TABLE klant (klantnummer integer NOT NULL, naam varchar(255), adres varchar(255), woonplaats varchar(255), PRIMARY KEY (klantnummer));
CREATE TABLE filiaal (filiaalnummer integer NOT NULL, plaats varchar(255) NOT NULL, adres varchar(255) NOT NULL, PRIMARY KEY (filiaalnummer));
CREATE TABLE product (productnummer integer NOT NULL, omschrijving varchar(255) NOT NULL, prijs numeric(6, 2) NOT NULL, PRIMARY KEY (productnummer));
CREATE TABLE transactie (transactienummer integer NOT NULL, datum date NOT NULL, tijd time NOT NULL, klantnummer integer NOT NULL, filiaalnummer integer NOT NULL, PRIMARY KEY (transactienummer));
CREATE TABLE aankoop (transactienummer integer NOT NULL, product integer NOT NULL, aantal integer NOT NULL, PRIMARY KEY (transactienummer, product));

ALTER TABLE transactie ADD CONSTRAINT FK_klant_klantnummer FOREIGN KEY (klantnummer) REFERENCES klant (klantnummer);
ALTER TABLE transactie ADD CONSTRAINT FK_filiaal_filiaalnummer FOREIGN KEY (filiaalnummer) REFERENCES filiaal (filiaalnummer);
ALTER TABLE aankoop ADD CONSTRAINT FK_transactie_transactienummer FOREIGN KEY (transactienummer) REFERENCES transactie (transactienummer);
ALTER TABLE aankoop ADD CONSTRAINT FK_product_productnummer FOREIGN KEY (product) REFERENCES product (productnummer);