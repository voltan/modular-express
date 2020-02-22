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