	$(document).ready(function(){
//點漢堡
		$('.ph_hb').click(function(){
		if($('nav').hasClass('phNav-origin')){
				// $('nav').css('display','block');
				// $('nav').animate({top:''})
				$('nav').addClass('phNav-active');
				$('nav').removeClass('phNav-origin');
				$('.hb').append('<style>.hb:after{opacity:0}</style>');
				$('.phNav_container').addClass('phNav_container-active');
				// $('.phNav_container').animate({height:'100vh'},0);
				$('.ph_hb-close').show();
			}else if($('nav').hasClass('phNav-active')){
				// $('nav').animate({top:''})
				$('nav').removeClass('phNav-active');
				$('nav').addClass('phNav-origin');
				$('.hb').append('<style>.hb:after{opacity:1}</style>');
				$('.phNav_container').removeClass('phNav_container-active');
				// $('.phNav_container').animate({height:'50'},1000);
				$('.ph_hb-close').hide();
			}
		$('.hb_1').toggleClass('hb_1-active');
		$('.hb_2').toggleClass('hb_2-active');
		});
//點子選單
	if($(window).width()<1024){
		$('.webDesign_menu .fas').click(function(){
			$('ul.webDesign_subMenu').toggleClass('subMenu-active');
			$(this).toggleClass('fas-active');
		});
		$('.works_menu .fas').click(function(){
			$('ul.works_subMenu').toggleClass('subMenu-active');
			$(this).toggleClass('fas-active');
		});
	}
	// else if($(window).width()>1024){
	// 	$('.webDesign_menu,.webDesign_menu .fas').mouseup(function(){
	// 		$('ul.webDesign_subMenu').toggleClass('subMenu-active');
	// 		$(this).toggleClass('fas-active');
	// 	});
	// 	$('.webDesign_menu,.works_menu .fas').mouseup(function(){
	// 		$('ul.works_subMenu').toggleClass('subMenu-active');
	// 		$(this).toggleClass('fas-active');
	// 	});
	// }
//點任一處都可以離開選單		
		$('.ph_hb-close').click(function(){
				$('nav').removeClass('phNav-active');
				$('nav').addClass('phNav-origin');
				$('.hb').append('<style>.hb:after{opacity:1}</style>');
				$('.phNav_container').removeClass('phNav_container-active');
				$('.ph_hb-close').hide();
				$('.hb_1').toggleClass('hb_1-active');
				$('.hb_2').toggleClass('hb_2-active');
		});

//contact按鈕的滑動
			$('a[href="#contact"]').click(function(){
				$('html,body').animate({scrollTop:$('#contact').offset().top},700);
				// $("html,body").animate({scrollTop:0},15000,"easeOutBounce");
				return false;
			});

//gotop

			$(window).scroll(function(){
			_scrTop2=$(window).scrollTop();
				if(_scrTop2>=600){
				$('.goTop').addClass('goTop-active');
				$('.goTop').removeClass('goTop-org');

			}else{
				$('.goTop').removeClass('goTop-active');
				$('.goTop').addClass('goTop-org');
			
			}
	});			
			$('#goTop').click(function(){
				$("html,body").animate({scrollTop:0},1000);
			});
//捲到一個地方字會跑出來的動畫
			//捲軸位置歸零
			var _scroTop = 0;  
			//當視窗開始捲動時,取得捲軸位置
			$(window).scroll(function(){
				_scrpTop = $(window).scrollTop();
				console.log(_scrpTop);
				//使用for迴圈和$('div').eq(索引值)取得第幾個物件的.offset().top至頂端的高度
				for(var i = 0, k = $('.content-index-product-info').length; i < k; i++){
				// console.log($('.content-index-product-info').eq(i).offset().top);
				//當達到判斷式時，啟動程式
					if(_scrpTop > $('.content-index-product-info').eq(i).offset().top - 400){
						$('.content-index-product-info').eq(i).addClass('content-index-product-pie-info');
						console.log('RUN');
						// $('.content-index-product-info').eq(i).removeClass('content-index-product-info');
					}
				}
		
			});


});