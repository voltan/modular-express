CREATE TABLE `monitoring_log`
(
  `id`              INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id`         INT(10) UNSIGNED NOT NULL DEFAULT '0',
  `user_token`      VARCHAR(255)     NOT NULL DEFAULT '',
  `action`          VARCHAR(255)     NOT NULL DEFAULT '',
  `request_params`  MEDIUMINT        NOT NULL,
  `request_result`  MEDIUMINT        NOT NULL,
  `created_at`      datetime         NOT NULL,
  `updated_at`      datetime         NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE  `monitoring_visit` (
  `id`              INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `section` enum('front','admin','feed','api') NOT NULL DEFAULT 'front',
  `modules` varchar(50) NOT NULL DEFAULT '',
  `entity` varchar(50) NOT NULL DEFAULT '',
  `entity_id` int(10) unsigned NOT NULL DEFAULT '0',
  `action` varchar(20) NOT NULL DEFAULT '',
  `user_id`         INT(10) UNSIGNED NOT NULL DEFAULT '0',
  `user_token`      VARCHAR(255)     NOT NULL DEFAULT '',
  `ip` varchar(16) NOT NULL DEFAULT '',
  `source` varchar(10) NOT NULL DEFAULT '',
   `created_at`      datetime         NOT NULL,
   `updated_at`      datetime         NOT NULL,
  PRIMARY KEY (`id`)
);