<?php
    header("Content-Type:application/json");
    /*定义一个数组用于存放数据*/
    $output = [];
    //每页读取的个数
    $count = 5;
    $start = $_REQUEST['start'];
    if(empty($start)){
        $start = 0;
    }
    $conn = mysqli_connect('127.0.0.1','root','','kaifanla',3306);
    $sql = "SET NAMES UTF8";
    mysqli_query($conn,$sql);

    $sql = "SELECT did,name,price,img_sm,material FROM kf_dish LIMIT $start,$count";
    $result = mysqli_query($conn,$sql);     //$result就是查询结果集

    while(true){
        $row = mysqli_fetch_assoc($result);
        if(!$row){
            break;
        };
        $output[] = $row;
    }
    echo json_encode($output);
?>