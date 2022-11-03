<?php
require 'vendor/autoload.php';



if (!empty($_POST["searchInput"])){
    $searchInput = $_POST["searchInput"];
    dump($searchInput);
    $API_KEY = "api_key=be9480de1d60eae1fa03ff863915a3ff";
    $BASE_URL = "https://api.themoviedb.org/3/search/movie?";


    $request = $BASE_URL . $API_KEY . "&language=en-US&query=". $searchInput."&page=1&include_adult=false";
    dump($request);

    $data = file_get_contents($request);
    $json = json_decode($data);
    dump($json->results);


}

