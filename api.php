<?php 
	header('Content-Type:application/json');
	ini_set('date.timezone','Asia/Shanghai');
	$arr=file('list.txt');
    $n=rand(0,count($arr)-1);
    $domain = $arr[$n];
	$BeginDate=date('Y-m-01', strtotime(date("Y-m-d")));
	$json = array('domain'=>$domain,'nowTime'=>$date = date("Y-m-d H:i:s"),'monthEndTime'=>$date =  date('Y-m-d 23:59:59', strtotime("$BeginDate +1 month -1 day")));
	exit(json_encode($json)); 
	
?>