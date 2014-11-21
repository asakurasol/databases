DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS `messages`;

CREATE TABLE `messages` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `text` varchar(255),
  `user` varchar(255),
  `createdAt` varchar(255),
  PRIMARY KEY (`id`)
);

/* Create other tables and define schemas for them here! */

INSERT INTO `messages` (text, user, createdAt)
VALUES ('hello', 'I', 'now');


/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

