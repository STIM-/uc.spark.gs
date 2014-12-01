/* =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*

	#FUTURE 2014 - The ultimate countdown 8:1
	@Author		   Torros / Madeon08
	@Type          Javascript
	@Last Update   2:10 PM Thursday, July 3rd, 2014

	TABLE OF CONTENTS
	---------------------------
	 1. Loading
	 2. Countdown
	 3. Carousel
	 4. Map
	 5. Notify
	 6. Popup
	 7. Video
	 8. Buttons, Links & Animations
	 9. Newsletter
	10. Tooltip

  =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=* */

window.mobilecheck = function() {
  var check = false;
  (function(a,b){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}

var mcheck = false;

/* ***** 1. Loading ***** */
		
$(window).load(function() {

	mcheck = mobilecheck ();

	if (mcheck)
		$('.submit').html ('訂閱電子報');

	/*
	$('.globload').delay(2000).fadeOut("slow")

	setTimeout(function() {
		$('h1.tlt').textillate({ in: { effect: 'fadeInUp', shuffle: false, delayScale: 2.0  } });
	}, 2800);
	
	setTimeout(function() {
	
	$(".tlt").addClass("fadeOut animated-fast");
	}, 5500);
	
	setTimeout(function() {
	
	$(".tlt").addClass("display-none");
	}, 6800);
	*/
		
	setTimeout(function() {
	
			$("#main-future").removeClass("opacity-0").addClass("opacity-1 animated fadeIn");
			$(".control-video").removeClass("opacity-0").addClass("opacity-1 animated fadeIn");
			$("#tit-main").addClass("animated fadeIn");
			$(".border").addClass("animated fadeIn");
			$(".link-box").addClass("animated fadeIn");
			$(".link-box").addClass("animated fadeIn");
			$("#subscribe").show ().addClass("animated fadeIn");
			$("#main-content h4").addClass("animated fadeIn");

		}, 0);
	
	/*
	setTimeout(function() {
		
		$(".days_dash").addClass("animated fadeInDown opacity-1");
		}, 6800);
	
	setTimeout(function() {
	
		$(".hours_dash").addClass("animated fadeInDown opacity-1");
		}, 7100);
	
	setTimeout(function() {
	
		$('.footer-container').css ('overflow', 'inherit');
		$(".minutes_dash").addClass("animated fadeInDown opacity-1");
		}, 7400);
	
	setTimeout(function() {
		$(".seconds_dash").addClass("animated fadeInDown opacity-1");
		}, 7700);
	*/
		
});

/* **** 2. Countdown **** */		
var submiting = false;

jQuery(document).ready(function() {
	$('#countdown_dashboard').countDown({
		targetDate: {
			'day': 		1,
			'month': 	12,
			'year': 	2014,
			'hour': 	0,
			'min': 		0,
			'sec': 		0
		},
		omitWeeks: true
	});
	
	/* **** 3. Carousel **** */
	
	$('.carousel').carousel({
	  interval: 5000
	})
	
	/* ****** 4. Map ******* */
	/*
	
	// When the window has finished loading create our google map below
		google.maps.event.addDomListener(window, 'load', init);
		google.maps.event.addDomListener(window, 'resize', init);
		
		function init() {
	
			var myLatlng = new google.maps.LatLng(49.6122021,6.1324549,17);
	
			// Basic options for a simple Google Map
			// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
			var mapOptions = {
			// How zoomed in you want the map to start at (always required)
			zoom: 11,
			scrollwheel: false,
			draggable: false,
			
			// The latitude and longitude to center the map (always required)
			center: myLatlng,
			
			// How you would like to style the map. 
			// This is where you would paste any style found on Snazzy Maps.
			styles: [	{	stylers:[			{hue:'#ff1a00'},			{invert_lightness:true},			{saturation:-100},			{lightness:33},			{gamma:0.5}	]	},{		featureType:'water',		elementType:'geometry',		stylers:[			{color:'#2D333C'}		]	}]
		};
	
			var map = new google.maps.Map(document.getElementById('map'), mapOptions);
		
			var contentString = '<div class="info-content"><h1 class="info-h1">We are here <small>28, Rue du Nord @ Luxembourg</small></h1><p>Located in the center of the city, lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum euismod erat, nec porta turpis fringilla sed. Morbi euismod metus sagittis, gravida orci id, tincidunt odio. Pellentesque habitant morbi tristique.</p></div>';
	
			var infowindow = new google.maps.InfoWindow({
			content: contentString
		});
	
			var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: 'Uluru (Ayers Rock)'
		});
	
			google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		});
	
	}
	*/
	
	/* ****** 5. Notify ******* */
	// Activate notifyMe plugin on a '#notifyMe' element	
	/*
		$("#notifyMe").notifyMe();
	*/

	$('#notifyMe').submit (function () {

		if (submiting)
			return false;

		var email   = $('#mail-sub')
			, submit  = $('.submit')
			, loading = $('img.loading')
			, message = $('#message-sub')
			;

		if (email.val () == '')
			return false;

		submiting = true;

		if (! mcheck)
			loading.animate ({opacity: 1});

		$.get ('https://us9.api.mailchimp.com/2.0/lists/subscribe.json'
			+ '?apikey=c401b9537f73eb929fa42a4cff113719-us9'
			+ '&id=b70dec3d10'
			+ '&email[email]=' + email
			+ '&merge_vars[SOURCE]=Landing-Page'
			+ '&double_optin=false'
			+ '&send_welcome=true').always (function (resp) {

				if (! mcheck) {

					setTimeout (function () {

						loading.animate ({opacity: 0}, 'fast', function () {

							email.animate ({width: 0, paddingLeft: 0, paddingRight: 0, opacity: 0}, {
								duration: 450,
								complete: function () {
								}
							});

							submit.blur ().animate ({backgroundColor: '#EA8C01', borderColor: '#FF9B08'}, {
								duration: 450,
								complete: function () {
									$(this).html ('完成');
								}
							});

							message.animate ({width: 295, paddingLeft: 15, paddingRight: 15, opacity: 1}, {
								duration: 450,
								complete: function () {
								}
							});

						});

					}, 2000);

					setTimeout (function () {

						submiting = false;

						email.val ('').animate ({width: 295, paddingLeft: 15, paddingRight: 15, opacity: 1}, {
							duration: 450,
							complete: function () {
							}
						});

						submit.blur ().animate ({backgroundColor: '#236EC4', borderColor: '#EEEEEE'}, {
							duration: 450,
							complete: function () {
								$(this).html ('訂閱');
							}
						});

						message.animate ({width: 0, paddingLeft: 0, paddingRight: 0, opacity: 0}, {
							duration: 450,
							complete: function () {
							}
						});

					}, 6000);
				}

				else {

					setTimeout (function () {
						submit.blur ().css ({backgroundColor: '#EA8C01', borderColor: '#FF9B08'}).html ('訂閱完成');
					}, 1000);

					setTimeout (function () {
						submiting = false;
						submit.css ({backgroundColor: '#236EC4', borderColor: '#EEEEEE'}).html ('訂閱電子報');
					}, 5000);
				}

			});

		return false;

	});
			
});
	
/* ****** 6. Popup ******* */
/*
$(document).ready(function() {

	$('#my_popup').popup({
		transition: 'all 1.2s'
	});

	$('#about-exp').popup({
		pagecontainer: '.container',
		transition: 'all 1.2s'
	});
*/

/* ****** 7. Video ******* */

// **** Button for mute or unmute the video ****
/*
	$('a#video-volume').click(function()
	{
		$('a#video-unmute').fadeIn('slow');
		$('a#video-volume').fadeOut('fast');
	});
	$('a#video-unmute').click(function()
	{
		$('a#video-unmute').fadeOut('fast');
		$('a#video-volume').fadeIn('slow');
	})
});
*/
	
/* ****** 8. Buttons, Links & Animations ******* */	
/*
jQuery(document).ready(function() {
	
	jQuery('a#supramap').click(function(){
		 jQuery('#map').addClass('frontoff');
		 jQuery('#close-map').addClass('sub-down');
		 jQuery('#main-future').addClass('fadeOut animated');
	});

    jQuery('a#about-anim').click(function(){
         jQuery('.about-p').addClass('fadeInLeft animated');
		 jQuery('#img-about').addClass('fadeInRight animated');
		 jQuery('.align-reduce h2').addClass('fadeIn animated');
		 jQuery('#main-future').addClass('fadeOut animated');
    });
	
	jQuery('a#contact-anim').click(function(){
         jQuery('.cont-icon').addClass('fadeInUp animated');
		 jQuery('#main-cont').addClass('fadeInLeft animated');
		 jQuery('#text-cont').addClass('fadeInRight animated');
		 jQuery('.fullwidth').addClass('fadeInUp animated');
		 jQuery('.align-reduce h2').addClass('fadeIn animated');
		 jQuery('#main-future').addClass('fadeOut animated');
    });
	
	jQuery('a.fa-comp').click(function(){
		 jQuery('#main-future').removeClass('fadeOut').addClass('fadeIn');
    });
	
	$(document).keyup(function(e) {

		if (e.keyCode == 27) { jQuery('#main-future').removeClass('fadeOut').addClass('fadeIn'); }   // keycode 27 is Esc
	
	});
	
	jQuery('a#close-map-top').click(function(){
		 jQuery('#map').removeClass('frontoff');
		 jQuery('#close-map').removeClass('sub-down');
		 jQuery('#main-future').removeClass("fadeOut").addClass("fadeIn");
    });
	
	jQuery('a#newsletter').click(function(){
         jQuery('#subscribe').toggleClass('sub-down');
    });
	
	$("a#fullscreen").click(function() {
	   if ($('#main-future').hasClass("fadeIn")) {
		  $('#main-future').removeClass("fadeIn").addClass("fadeOut animated");
		  return;
	   }
	   if ($('#main-future').hasClass("fadeOut")) {
		  $('#main-future').removeClass("fadeOut").addClass("fadeIn");
		  return;
	   }
	});
	
	jQuery('a.switch').click(function(){
         jQuery('#switcher').toggleClass('showing');
    });
	
});
*/

/* ****** 9. Newsletter ******* */	
/*
$("a#newsletter")
	.each(function(i) {
		
		if (i != 0) { 
		  $("#beep-two")
			.clone()
			.attr("id", "beep-two" + i)
			.appendTo($(this).parent()); 
		}
		
		$(this).data("beeper", i);
	  })
	  
	.mouseenter(function() {
		$("#beep-two" + $(this).data("beeper"))[0].play();
	});
		$("#beep-two").attr("id", "beep-two0");
*/
/* ****** 10. Tooltip ******* */	

if (window.matchMedia("(min-width: 991px)").matches) {	
			
$(function () { $("[data-toggle='tooltip']").tooltip(); });

}