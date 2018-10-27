
$(document).ready(function(){
	var GAME = {
		imgs:[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10],
		init:function(){
			GAME.change();
		},	
		
		change:function(){
			var random;
			var elem;
			for(var i=1;i<GAME.imgs.length;i++){
				random=Math.round(Math.random()*i);
				elem=GAME.imgs[i];
				GAME.imgs[i]=GAME.imgs[random];
				GAME.imgs[random]=elem;
			}
			GAME.assignimgs();
		},
		
		assignimgs:function(){
			$(".win").each(function(index){
				$(this).attr("data-img-value",GAME.imgs[index])
			});
			GAME.clickimgs();
		},
		
		clickimgs:function(){
			$(".win").on("click",function(){
				var count = $(this).data("imgValue");
				var num='images'+'/'+count+'.'+'png';
				$(this).html("<img src='"+num+"' width='75' height='75'>").addClass("selected");	
				GAME.check();
			});
				
		},
		
		check:function(){
			if($(".selected").length == 2){
				if($(".selected").first().data("imgValue") == $(".selected").last().data("imgValue")){
					$(".selected").each(function(){
						$(this).animate({opacity:0}).removeClass("win");
					});
					$(".selected").each(function(){
						$(this).removeClass("selected");
					});
					GAME.checkWin();
				}
				else{
					setTimeout(function(){
						$(".selected").each(function(){
							$(this).html("").removeClass("selected");
						});
					},1000);
				}
			}
		},
		
		checkWin:function(){
			if($(".win").length===0){
				$(".igra").html("<h1>You Won!</h1>");
				$("h1").animate({
					top: '+=50',
					fontSize: '70px',
				});
			}
		}
	};

	GAME.init();
})
		
			
			
