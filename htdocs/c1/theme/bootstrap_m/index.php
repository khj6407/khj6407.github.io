<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

include_once(G5_THEME_PATH.'/head.php');

if(is_file(G5_PATH.'/main.php'))
{
	include G5_PATH.'/main.php';
}else{
?>

<!----------------------------------------------------------------------------->

    <!--==========================
      About Us Section
    ============================-->
    <section id="about">
      <div class="container">

        <header class="section-header">
          <h3>회사소개</h3>
          <p>자사의 기업이념은 고객에게 지속적으로 우수한 기술력을 제공하고, 고객들의 제품 설계에 대한 다양한 요구사항을 만족시킬 수 있는 솔루션을 제공합니다.</p>
        </header>

        <div class="row about-container">



          </div>





          
        </div>

      </div>
    </section><!-- #about -->

<!----------------------------------------------------------------------------->

<?php
}

include_once(G5_THEME_PATH.'/tail.php');
?>