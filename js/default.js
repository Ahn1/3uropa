function resetImageTop()
{
	var cTop = $(document).scrollTop();
	var wHeight = $(window).height();
	var maxScroll = $(document).height() - wHeight;


	$("#plot").css("background-position"," 0px " + (-cTop / 2).toString() + "px");
}

function SetAffix()
{
	$('#heading').affix({
		      offset: {
		        top: $('#preHeader').offset().top
		      }
		});	
}

function UpdateAffixPlaceholder()
{
	var cTop = $(document).scrollTop();
	var top = $('#preHeader').offset().top;

	if(cTop > top)
	{
		$('#preHeader').css("height",$("#heading").height().toString()  + "px");
	}
	else
	{
		$('#preHeader').css("height","0px");
		console.log("0");
	}
}

function SetupResize()
{
	var rtime = new Date(1, 1, 2000, 12,00,00);
	var timeout = false;
	var delta = 200;
	$(window).resize(function() {
	    rtime = new Date();
	    if (timeout === false) {
	        timeout = true;
	        setTimeout(resizeend, delta);
	    }
	});

	function resizeend() {
	    if (new Date() - rtime < delta) {
	        setTimeout(resizeend, delta);
	    } else {
	        timeout = false;
	        SetAffix();
	    }               
	}
}

$(document).ready(function(){


	$('a').click(function(){
		var top = $("#heading").height();
		if($("#heading").css("position") == "static"){
			top = $("#heading").height();
		}
		if (!$(this).attr("data-navMargin")) {top = 0;};

	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top - top
	    }, 500);
	    return false;
	});

	$(window).scroll(function(){
		resetImageTop();
		UpdateAffixPlaceholder();
	});
	
	SetAffix();

});






