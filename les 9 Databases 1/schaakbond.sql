DROP TABLE IF EXISTS lidmaatschap;
DROP TABLE IF EXISTS speler;
DROP TABLE IF EXISTS club;

CREATE TABLE speler (
	spelersnummer INTEGER PRIMARY KEY,
	naam VARCHAR(255) NOT NULL,
	woonplaats VARCHAR(255),
	geboortedatum DATE,
	rating INTEGER
);

CREATE TABLE lidmaatschap (
	ID SERIAL NOT NULL,
	begindatum DATE,
	einddatum DATE,
	spelerspelersnummer INTEGER,
	clubclubnummer INTEGER
);

CREATE TABLE club (
	clubnummer INTEGER,
	naam VARCHAR(255),
	adres VARCHAR(255),
	plaats VARCHAR(255),
	logo BYTEA
);

ALTER TABLE club
ADD PRIMARY KEY (clubnummer);

ALTER TABLE lidmaatschap
ADD CONSTRAINT lidmaatschap_spelernr_fk
	FOREIGN KEY(spelerspelersnummer) REFERENCES speler(spelersnummer);
	
ALTER TABLE lidmaatschap
ADD CONSTRAINT lidmaatschap_clubnr_fk
	FOREIGN KEY(clubclubnummer) REFERENCES club(clubnummer);
