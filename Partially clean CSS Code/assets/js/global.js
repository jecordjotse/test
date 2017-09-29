   
   
(function($) {   
			
			 /*---------------------------------------------------------------------------------------
			  Select 2 
			 -------------------------------------------------------------------------------------*/	
			 $(".select").select2({
			   theme: "bootstrap"
			});		
			
			
			$( '#onwardDate' ).flatpickr({
				dateFormat: "d-m-Y",
				minDate: "today",
				altInput: true,
				altFormat: "j F, Y"
			  });
			/*---------------------------------------------------------------------------------------
			  Select 2  dropdown icon
			 -------------------------------------------------------------------------------------*/	
 
			 $('[data-toggle="popover"]').popover(); 
			 
			 $('b[role="presentation"]').hide();
			 
			$('.select2-container--bootstrap .select2-selection--single .select2-selection__arrow').append('<i class="fa fa-angle-down"></i>'); 
			
			  $("#tablesort").tablesorter(); 
			
			
			
		/*------------------- Payment Option
	
		$("div.payment_box").hide();
		
		$("input[name$='payments']").on("click",function() {
				var test = $(this).val();
				$("div.payment_box").hide();
				$("#" + test).show();
		});
		
			 ---------------*/	
			
			
			
			
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

			
  
												
	 
	  
		
})(jQuery);

