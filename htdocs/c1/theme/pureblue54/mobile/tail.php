<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가
?>

	    </div>
		<!-- } container 끝 -->
		
		<?php
	    // 사이드 메뉴 오른쪽 배치
	    if( ($tconfig['layout_side_movable'] && $config['cf_layout_side_area'] == 'right')
	        || (!$tconfig['layout_side_movable'] && $tconfig['cf_layout_side_area'] == 'right')) {
	        echo $side_menu_html;
	    }
	    ?>
	
		<div id="ft">
		    <div id="ft_copy">
		        <div id="ft_company">
		            <a href="<?php echo get_pretty_url('content', 'company'); ?>">회사소개</a>
		            <a href="<?php echo get_pretty_url('content', 'privacy'); ?>">개인정보처리방침</a>
		            <a href="<?php echo get_pretty_url('content', 'provision'); ?>">서비스이용약관</a>
		        </div>
		        <p class="ft_info">
            우. 07062 서울시 동작구 여의대방로16길 61 <br> 
            대표전화 (02)2181-0900 <br> (평일 9:00~18:00, 야간휴일은 당직실 연결) <br>
            본 홈페이지에 게시된 이메일 주소가 자동 수집되는 것을 거부하며, 이를 위반시 정보통신망법에 의해 처벌됨을 유념하시기 바랍니다.
        </p>  
         Copyright &copy; 2009 KMA. <b>E-mail: webmasterkma@kma.go.kr</b> All rights reserved.
		    </div>
		    <button type="button" id="top_btn"><i class="fa fa-arrow-up" aria-hidden="true"></i><span class="sound_only">상단으로</span></button>
			
			<script>
            $(function() {
                // 폰트 리사이즈 쿠키있으면 실행
                font_resize("html_wrap", get_cookie("ck_font_resize_rmv_class"), get_cookie("ck_font_resize_add_class"));

                // '상단으로' 버튼
                $("#top_btn").on("click", function() {
                    $("html, body").animate({scrollTop:0}, '500');
                    return false;
                });
            });
            </script>
            	
			<?php	
		    if ($config['cf_analytics']) {
		        echo $config['cf_analytics'];
		    }
		    ?>
		</div>
	</div>
	<!-- } con_right 끝 -->
</div>
<!-- } wrapper 끝 -->
<?php
include_once(G5_THEME_PATH."/tail.sub.php");
?>