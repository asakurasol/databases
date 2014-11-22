DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS `messages`;

CREATE TABLE `messages` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `message` varchar(255),
  `username` varchar(255),
  `roomname` varchar(255),
  `createdAt` DATETIME DEFAULT NOW(),
  PRIMARY KEY (`id`)
);

/* Create other tables and define schemas for them here! */


/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

