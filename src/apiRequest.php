<?php
require 'vendor/autoload.php';


$API_KEY = "api_key=be9480de1d60eae1fa03ff863915a3ff";

$BASE_URL = "https://api.themoviedb.org/3";

$popmovie = "/discover/movie?sort_by=popularity.desc&";

$request = $BASE_URL . $popmovie . $API_KEY;


$data = file_get_contents($request);
$json = json_decode($data);
dump($json);