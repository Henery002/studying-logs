<?php
header('Content-Type:application/json');
$stuArray = [];
$stuArray[] = [
 "name"=>"Mary",
 "age"=>20
];
$stuArray[] = [
 "name"=>"Lary",
 "age"=>30
];
$str = "";
$str = json_encode($stuArray);
echo $str;


?>