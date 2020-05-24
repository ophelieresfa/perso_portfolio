<?php

define('DB_DSN', 'mysql:host=localhost;port=8080;dbname=perso_portfolio');
define('DB_USER', 'root');
define('DB_PASSWORD', '');
define('DB_OPTIONS', array(PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC, PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
