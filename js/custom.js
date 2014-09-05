// JavaScript Document

/*----------------------------------------------------------------------- Preloader -------------------------------*/


jQuery(window).load(function() {
             $('.doc-loader').fadeOut('slow'); 
             displayHints();
             addTweets();	
         	});






/*----------------------------------------------------------------------- Nice Scroll -------------------------------*/


 $(document).ready(function() {    
         $("html").niceScroll();  // The document page (body)
         
         
         
         });




/*----------------------------------------------------------------------- One Page Navigation -------------------------------*/


 $(document).ready(function() {
         	$('.nav').onePageNav({
         	filter: ':not(.external)',
         	scrollThreshold: 0.25,
         	scrollOffset: 177
         	});
         
         });






/*----------------------------------------------------------------------- Heading Bars -------------------------------*/

$(document).ready(function() {
         
             /* BORDERS */
            /* var w = $(window).width()-0;*/
         
            <!--var w = $('.container').css('width')-->
         	var w = $(window).width()-0;
             $('.top_box_left, .top_box_right').css('border-left-width', w);
             $('.bot_box_left, .bot_box_right').css('border-right-width', w);
         
         $(window).resize(function() {
           var w = $(window).width()-0;
             $('.top_box_left, .top_box_right').css('border-left-width', w);
             $('.bot_box_left, .bot_box_right').css('border-right-width', w);
         });
         
         
         });
	   
	   
	   
	   
 $(document).ready(function() {    
             /* BORDERS */
             var w = $('.span6').css('width')
             $('.span6 .top_box_left, .span6 .top_box_right').css('border-left-width', w);
             $('.span6 .bot_box_left, .span6 .bot_box_right').css('border-right-width', w);
             
         
         $(window).resize(function() {
             var w = $('.span6').css('width')
             $('.span6 .top_box_left, .span6 .top_box_right').css('border-left-width', w);
             $('.span6 .bot_box_left, .span6 .bot_box_right').css('border-right-width', w);
         });
         
         
         });
	   
	   
	   
	   
	   
      $(document).ready(function() {    
             /* BORDERS */
             var w = $('.span3').css('width')
             $('.span3 .top_box_left, .span3 .top_box_right').css('border-left-width', w);
             $('.span3 .bot_box_left, .span3 .bot_box_right').css('border-right-width', w);
             
         
         $(window).resize(function() {
             var w = $('.span3').css('width')
             $('.span3 .top_box_left, .span3 .top_box_right').css('border-left-width', w);
             $('.span3 .bot_box_left, .span3 .bot_box_right').css('border-right-width', w);
         });
         
         
         });
	   
	   
	   
	   
	   
	   
 $(document).ready(function() {    
             /* BORDERS */
             var w = $('.span9').css('width')
             $('.span9 .top_box_left, .span9 .top_box_right').css('border-left-width', w);
             $('.span9 .bot_box_left, .span9 .bot_box_right').css('border-right-width', w);
             
         
         $(window).resize(function() {
             var w = $('.span9').css('width')
             $('.span9 .top_box_left, .span9 .top_box_right').css('border-left-width', w);
             $('.span9 .bot_box_left, .span9 .bot_box_right').css('border-right-width', w);
         });
         
         
         });
	   
	   
	   	   
	   
	   
	   
    $(document).ready(function() {    
             /* BORDERS */
             var w = $('.span4').css('width')
             $('.span4 .top_box_left, .span4 .top_box_right').css('border-left-width', w);
             $('.span4 .bot_box_left, .span4 .bot_box_right').css('border-right-width', w);
             
         
         $(window).resize(function() {
             var w = $('.span4').css('width')
             $('.span4 .top_box_left, .span4 .top_box_right').css('border-left-width', w);
             $('.span4 .bot_box_left, .span4 .bot_box_right').css('border-right-width', w);
         });
         
         
         });	   
	   
	   	   
	   
/*----------------------------------------------------------------------- Hide Logo -------------------------------*/

$(window).scroll(function() {
         	
         	
         	if($(this).scrollTop() >10) {
         
         		$('#logo').hide(1000);
         
         
         $('.navbar').css({'background': 'rgba(0, 0, 0, 0.6)'});
         
         		$('#top-nav').css({'margin-top':'0px'});
         		/*$('#top-nav').css({'margin-top':'20px','background-color':'#06F'});*/
         	
         	} 		
         	
         	else {
         		
         		
         		$('#logo').show(1000);;
         $('.navbar').css({'background': 'rgba(0, 0, 0, 0.0)'});
         		$('#top-nav').css({'margin-top':'0px'});
         
         		/*$('#top-nav').css({'margin-top':'0px','background-color':'none'});*/
         	}
         });	   
	   
/*$(function () {
	
	var lastScrollTop = 0;
	$(window).scroll(function(event){
	   var st = $(this).scrollTop();
	   if (st > lastScrollTop){
		   $(".navbar").hide(200);
	   } else {
		   $(".navbar").show(200);
	   }
	   lastScrollTop = st;
	});

   
});	*/   
/*----------------------------------------------------------------------- ToTop -------------------------------*/

 $(document).ready(function(){ 
         
             $(window).scroll(function(){
                 if ($(this).scrollTop() > 100) {
                     $('.scrollup').fadeIn();
                 } else {
                     $('.scrollup').fadeOut();
                 }
             }); 
         
             $('.scrollup').click(function(){
                 $("html, body").animate({ scrollTop: 0 }, 600);
                 return false;
             });
         
         });	   
	   
	   
/*----------------------------------------------------------------------- Twitter -------------------------------*/	   
	   	   
   