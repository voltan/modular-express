CREATE TABLE `monitoring_log`
(
    `id`          INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id`  INT(10) UNSIGNED NOT NULL DEFAULT '0',
  `user_token` VARCHAR(255)        NOT NULL DEFAULT '',
  `action` VARCHAR(255)        NOT NULL DEFAULT '',
      `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
    PRIMARY KEY (`id`)
);