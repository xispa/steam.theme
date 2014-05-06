$(document).ready(function(){
	if ($("#menutop").length > 0) {
		$("#menutop").jMenu({
		  openClick : false,
		  ulWidth : 'auto',
		  effects : {
			effectSpeedOpen : 200,
			effectSpeedClose : 200,
			effectTypeOpen : 'show',
			effectTypeClose : 'hide',
			effectOpen : 'linear',
			effectClose : 'linear'
		  },
		  TimeBeforeOpening : 100,
		  TimeBeforeClosing : 100,
		  animatedText : false,
		  paddingLeft: 1
		});
		$("#menutop li.level2:last-child").addClass("last-item");
	}
	if ($("#actions").length > 0) {
		$("#actions").jMenu({
		  openClick : false,
		  ulWidth : 'auto',
		  effects : {
			effectSpeedOpen : 200,
			effectSpeedClose : 200,
			effectTypeOpen : 'show',
			effectTypeClose : 'hide',
			effectOpen : 'linear',
			effectClose : 'linear'
		  },
		  TimeBeforeOpening : 100,
		  TimeBeforeClosing : 100,
		  animatedText : false,
		  paddingLeft: 1
		});
		$("#menutop li.level2:last-child").addClass("last-item");
	}
	if ($("#column-two").length == 0 || 
		$("#column-two").children().length == 0) {
		$("#column-content").css("margin", "0px 0px 0px 0px");
	}
	
	/*var $window = $(window),
    $body = $('body'),
    $headertop = $('#header-top'),
    $mainmenu = $('#mainmenu'),
    $menusubbar = $('#menusubbar')
    $editbar = $('#editbar');
	
    menuheight         = $mainmenu.outerHeight();
	menubottomposition = $mainmenu.offset().top + menuheight;
	paddingtop         = $headertop.outerHeight() + $header.outerHeight() - menuheight + 12;
	contentposition    = $headertop.outerHeight() + $header.outerHeight() + menuheight + $contenthead.outerHeight();
	
	$window.scroll(function() {
        $mainmenu.removeClass('pinned');
        $mainmenu.removeClass('pinned-marged');
        if ($window.scrollTop() > contentposition) {
          $mainmenu.addClass('pinned-marged');
          $body.css('paddingTop', paddingtop +'px');
        } else if ($window.scrollTop() > menubottomposition) {
          $mainmenu.addClass('pinned');
          $body.css('paddingTop', paddingtop +'px');
        } else {
          $body.css('paddingTop', '');
        }
    });*/
})