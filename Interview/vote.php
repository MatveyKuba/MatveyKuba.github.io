<?php

require "db.php";
$data = $_POST;
$ip = $_SERVER['REMOTE_ADDR'];

$all_votes = R::findAll(('votes'));
$can = True;

foreach($all_votes as $row){
    if($row['ip'] == $ip && $row['id_interview'] == $data['id_interview']){
        $can = False;
    }
}

if($can){
    $vote = R::dispense(('votes'));
    $vote->id_interview = $data['id_interview'];
    $vote->id_answer = $data['id_answer'];
    $vote->ip = $_SERVER['REMOTE_ADDR'];

    R::store(($vote));
}
?>