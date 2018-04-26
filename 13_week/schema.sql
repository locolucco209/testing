DROP DATABASE IF EXISTS top_songsdb;

CREATE DATABASE top_songsdb;

USE top_songsdb;

CREATE TABLE Top5000 (
  id integer auto_increment not null,
  Artist VARCHAR(20),
  Song_Title VARCHAR(20),
  Year_Released INTEGER(5),
  Score_1 FLOAT (10,10),
  Score_2 FLOAT (10,10),
  Score_3 FLOAT (10,10),
  Score_4 FLOAT (10,10),
  Score_5 FLOAT (10,10),
  PRIMARY KEY (ID)
);

SELECT * FROM Top5000;
