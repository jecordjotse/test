   
   
(function($) {   

				 $('.se-pre-con').fadeOut();
				 
				 
				 

   /*---------------------------------------------------------------------------------------
	  Owl Caurouselitems: 3,
					autoPlay: 5000,
				    itemsDesktop: [1000,3], 
				    itemsDesktopSmall: [980,3], 
				    itemsTablet: [768,2], 
				    itemsMobile: [479, 1],
					pagination: true,
                    autoHeight: true,			


					itemsDesktop: [1199, 1],
					itemsDesktopSmall: [980, 2],
					itemsTablet: [768, 2],
					itemsTabletSmall: false,
					itemsMobile: [479, 1],
	 -------------------------------------------------------------------------------------*/

	 $(document).ready(function() {
 
			  $(".owl-carousel").owlCarousel({
					items: 3,
					autoplay: 3000,
                    autoplayHoverPause: true,
					navigation: false,
					pagination: true,				
    				transitionStyle: "backSlide"
			      })
				  
				  
				  $('a#next').click(function  (){
					   $( '#onwardDate' ).flatpickr('setDate', '+1');
					     refreshSchedule();
                         return false;			  
				  })
			
					$('a#prev').click(function  (){
							   $( '#onwardDate' ).flatpickr('setDate', '-1');
								 refreshSchedule();
								 return false;			  
						  })
			 
			/*-----------------------------------------------------------------------
			Bootstrap touchspin 
			------------------------------------------------------------------------*/		

			 $("input[name='value']").TouchSpin({  
			   verticalbuttons: true,
			    min: 1,
                max: 10,
				prefix: "",
				verticalupclass: 'fa fa-angle-up',
                verticaldownclass: 'fa fa-angle-down',
				mousewheel: true
			});
			
			
			
			 /*---------------------------------------------------------------------------------------
			  Select 2 
			 -------------------------------------------------------------------------------------*/	
			 $(".select").select2({
			   theme: "bootstrap"
			});
			
		
		
			 $( "#datepicker" ).datepicker ({
			    minDate: -1, 
				maxDate: "+10D" 
			});
		    
			
			$('.carousel').carousel();
			
			/*---------------------------------------------------------------------------------------
			  Select 2  dropdown icon
			 -------------------------------------------------------------------------------------*/	
 
			 $('[data-toggle="popover"]').popover(); 
			 
			 $('b[role="presentation"]').hide();
			 
			/*----*/ $('.select2-container--bootstrap .select2-selection--single .select2-selection__arrow').append('<i class="fa fa-angle-down"></i>'); 
			
			
			
			/*----------------------------------------------------------------------------------------
		     SCROOL TO UP JS
		     ----------------------------------------------------------------------------------------*/
			$(window).on("scroll", function () {
				if ($(this).scrollTop() > 250) {
					$('.scrollup').fadeIn();
				} else {
					$('.scrollup').fadeOut();
				}
			});
			$('.scrollup').on("click", function () {
				$("html, body").animate({
					scrollTop: 0
				}, 800);
				return false;
			});

			
   });
												
	 
	  
		
})(jQuery);

	$(window).load(function(){
			   $('.se-pre-con').fadeOut();
			});
