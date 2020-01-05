<?
if (!defined("_GNUBOARD_")) exit; // 개별 페이지 접근 불가

/**************************************************************************************

[새파일] 아이스크림 NEW관리자모드로 인해 
         새로 만들어진 파일입니다
		 
***************************************************************************************
[안내] SIR에서 제공하는 그누보드/영카트 원본에는 없는 파일입니다
***************************************************************************************
최초적용일 : 2019-02-02
***************************************************************************************
버전 : 아이스크림 S9 영카트/그누보드 NEW 관리자
개발 : 아이스크림 아이스크림플레이 icecreamplay.cafe24.com
라이센스 : 유료판매 프로그램으로 유료 라이센스를 가집니다
           - 1카피 1도메인
           - 무단배포불가/무단사용불가
           - 소스의 일부 또는 전체 배포/공유/수정배포 불가
***************************************************************************************
::글읽을시 조회수가 별도테이블인 $g5['board_hit_table']에 추가 해줘야하는 위치::
theme/테마/skin/board/사용하는스킨/view.tail.skin.php
theme/테마/mobile/skin/board/사용하는스킨/view.tail.skin.php
skin/board/사용하는스킨/view.tail.skin.php
mobile/skin/board/사용하는스킨/view.tail.skin.php

**************************************************************************************/


// 글 읽을경우 hit 수 저장 - 아이스크림 전용기능
$ht_date = G5_TIME_YMD; // 년월일
$ht_datetime = G5_TIME_YMDHIS; // 년월일 00:00:00
$ht_mb_id = $member['mb_id']; //회원아이디


if($temp = sql_fetch("select ip_list from {$g5['board_hit_table']} where ht_date='$ht_date' and bo_table='$bo_table' and wr_id='$wr_id'")) {
    
	if(!strstr($temp[ip_list], "/".$_SERVER[REMOTE_ADDR]."/")) {
		sql_query("update {$g5['board_hit_table']} set hit = hit + 1, ip_list = CONCAT(ip_list, '{$_SERVER[REMOTE_ADDR]}', '/') where ht_date='$ht_date' and bo_table='$bo_table' and wr_id='$wr_id' LIMIT 1");
	}

} else {

sql_query("insert into {$g5['board_hit_table']} set ht_date='$ht_date', ht_datetime='$ht_datetime', gr_id='$board[gr_id]', bo_table='$bo_table', wr_id='$wr_id', hit='1', mb_id='$ht_mb_id' , ip_list='/{$_SERVER[REMOTE_ADDR]}/'");

}
?>