
function showRegisterForm(){
    $('.loginBox').fadeOut('fast',function(){
        $('.registerBox').fadeIn('fast');
    }); 

       
}
function showLoginForm(){
    $('#loginModal .registerBox').fadeOut('fast',function(){
        $('.loginBox').fadeIn('fast');
		$('.recoverBox').fadeOut('fast',function(){
            $('.loginBox').fadeIn('fast');
        });
		
    });       
}

function showRecoverForm(){
    $('.loginBox').fadeOut('fast',function(){
        $('.recoverBox').fadeIn('fast');
        $('.registerBox').fadeOut('fast',function(){
            $('.recoverBox').fadeIn('fast');
        });
    }); 

       
}

function openLoginModal(){
    showLoginForm();
    setTimeout(function(){
        $('#loginModal').modal('show');    
    }, 230);
    
}
function openRegisterModal(){
    showRegisterForm();
    setTimeout(function(){
        $('#loginModal').modal('show');    
    }, 230);
    
}


function openRecoverModal(){
    showRecoverForm();
    setTimeout(function(){
        $('#loginModal').modal('show');    
    }, 230);
    
}



$(window).scroll(function(){
			if($(window).scrollTop() > 500){
				$("#back-to-top").fadeIn(200);
			} else{
				$("#back-to-top").fadeOut(200);
			}
		});
		$('#back-to-top').on("click",function() {
			  $('html, body').animate({ scrollTop:0 }, '800');
			  return false;
		});

		
$("#introLoader").introLoader({
			animation: {
					name: 'gifLoader',
					options: {
							ease: "easeInOutCirc",
							style: 'dark bubble',
							delayBefore: 500,
							delayAfter: 0,
							exitTime: 300
					}
			}
		});	
