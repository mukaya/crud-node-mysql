CREATE DATABASE kda;

CREATE TABLE apprenant(
    id int(11) not null auto_increment,
    nom varchar(20) not null,
    prenom varchar(20) not null,
    optionApp varchar(50) not null,
    primary key(id) 
);
