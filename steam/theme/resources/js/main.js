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
})