drop database if exists animals_db;

create database animals_db;

use animals_db;

create table people (
  id integer(11) auto_increment not null,
  name varchar(30) not null,
  has_pet boolean not null,
  pet_name varchar(30),
  pet_age integer(10),
  primary key (id)
);

insert into people (name, has_pet, pet_name, pet_age)
values ("Bob", true, "Rocky", 100);

insert into people (name, has_pet, pet_name, pet_age)
values ("Jacob", true, "Misty", 10);

insert into people (name, has_pet, pet_name, pet_age)
values ("Peter", true, "Zoe", 2);

select * from people;
