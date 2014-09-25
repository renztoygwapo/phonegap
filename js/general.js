$(document).ready(function(e) {

	//Payment Tab Start
	$(".tabs-menu a").click(function(event) {
		event.preventDefault();
		$(this).parent().addClass("current");
		$(this).parent().siblings().removeClass("current");
		var tab = $(this).attr("href");
		$(".tab-content").not(tab).css("display", "none");
		$(tab).fadeIn();
	});
	//Payment Tab End
	
	$('.button-wrap').on("click", function(){
	  $(this).toggleClass('button-active');
	});
	// When I change Orientation Height will be change
	function changeWidthOrientation(){
		var docHeight = $(window).height();
		$(".menu-slide-cont").css('height',docHeight);
	}
	var docHeight = $(window).height();
	changeWidthOrientation();
	window.addEventListener("orientationchange", function() {
	if(window.orientation == 90){
		setTimeout(function(){
			changeWidthOrientation();
		},1000)
	}else{
	setTimeout(function(){
			changeWidthOrientation();
		},1000);
		
	}
}, false);

	$('.jobsch').on('click', function(event) {
		
		window.location.href = "event.html";
	});
	
// click on Menu icon menu will be open
    $('#navbar-toggle').click(function(){
	$('.container').css({'position':'fixed', overflow:'hidden'});
	$('.slide-trans-bg').show('fast');
	$('.menu-slide-cont').show('fast');
		if($(this).hasClass('home-toggle') == true){
			menuToggle(); // left Menu and left Menu Behind open ClickEvent
		}else{
			menuToggleRight(); // left Menu and left Menu Behind open ClickEvent
		}
	});
	/*Menu behind cloded Bg clickEvent */	
 $('.slide-trans-bg').click(function(){
	 if($(this).hasClass('slide-trans-bg-left')){
			menuClosed(); 
		 }else{
		   menuClosedRight();	 
		}
	  
	});
	
	/* Priority tab Open
	---------------------------------------------------------------------------------*/
	var prioContHeight = $('#priority-cont').height();
	$('#priority-cont').css('bottom','-'+prioContHeight+'px')
	
	$('#priority').click(function(e) {
		$('.loader-bg').fadeIn('fast',function(){
			$('#priority-cont').css('display','block').animate({'bottom':'10px'})	
		});
		$('.container').css('position','fixed');    
});
/* Priority tab Cancel
	---------------------------------------------------------------------------------*/
	$('.cancel-prio-btn').click(function(e) {
		
		$('#priority-cont').animate({'bottom':'-'+prioContHeight+'px'}, function(){
			
			$('.loader-bg').fadeOut();	
		})
		
		$('.container').removeAttr('style');    
});
/* Job detail select compnay
------------------------------------------------------------------------------------------*/
// $('.select-compnay h2').click(function(){
// 	$('.compnay-detail-drop-box').slideToggle('slow');
// });
	$('.add-customer-arrow a').click(function(e){
		e.preventDefault();
		
		if($(this).parent().next().css('display')=='block'){
			
			$(this).parent().next().slideUp('slow');
			$(this).removeClass('arr-down');
			//$(this).addClass('fa-chevron-up');
			}else{
			$(this).parent().next().slideDown('slow');
			$(this).addClass('arr-down');
			//$(this).removeClass('fa-chevron-up');	
			}
	});
	
	$('.notification').click(function(){
		window.location	= "job-details.html";
	});

	$('.get-qoute').click(function(){
		window.location	= "get_qoute.html";
	});
	$('#get-qoutes').click(function(){
		window.location	= "jobmenu.html";
	});
	$('#jobs').click(function(){
		window.location	= "job.html";
	});

	

	/*$('input[type="text"]').each(function(index, element) {
    var $element = $(element);
    var defaultValue = $element.val();
    $element.css('color', '#cccccc');
    $element.focus(function() {
        var actualValue = $element.val();
        if (actualValue == defaultValue) {
            $element.val('');
            $element.css('color', '#000000');
        }
    });
    $element.blur(function() {
        var actualValue = $element.val();
        if (!actualValue) {
            $element.val(defaultValue);
            $element.css('color', '#cccccc');
        }
    });
});
*/
});

function menuToggle(){
	$('.menu-slide-cont-left').animate({left:0},300);
	$('.slide-trans-bg-left').animate({left:0},300);	
}
// This for Right menu open
function menuToggleRight(){
	
	$('.menu-slide-cont-right').animate({left:'12.2%'},300);
	$('.slide-trans-bg-right').animate({left:0},300);	
}

function menuClosed(){
	 $(".menu-slide-cont-left").animate({left: '-88%'},300); // Menu bg Slide closed
	 $(".slide-trans-bg-left").animate({left:'-100%'},300);	// Menu begind clickEvent bg closed
}
// Right Menu closed
function menuClosedRight(){
	 $(".menu-slide-cont-right").animate({left: '100%'},300); // Menu bg Slide closed
	 $(".slide-trans-bg-right").animate({left:'100%'},300, function(){
		$('.slide-trans-bg').css('display','none');
		$('.menu-slide-cont').css('display','none');
		$('.container').removeAttr('style');	 
	});	// Menu begind clickEvent bg closed
}



