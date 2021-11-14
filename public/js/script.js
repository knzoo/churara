// JavaScript Document
$(function () {
    $('.js-bgbtn').on('click', function () {        // js-btnクラスをクリックすると、
      $('.burgernav__list , .bgbtn-line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
    })
  });
//リンクをクリックするとメニューが閉じる
$('.burgernav__list__link').on('click', function(event) {
    $('.bgbtn').trigger('click');
});

//要素をフェードイン
$(function(){
	$(window).scroll(function (){
		$('.fadein').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 10){
				$(this).addClass('scrollin');
			}
		});
	});
});

//要素をフェードインgallery
$(function(){
	$(window).scroll(function (){
		$('.fadein-gal').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 10){
				$(this).addClass('scrollin-gal');
			}
		});
	});
});


//要素を右へスライドイン
$(function(){
	$(window).scroll(function (){
		$('.slidein-right').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 10){
				$(this).addClass('scrollin-right');
			}
		});
	});
});

//要素を右へスライドイン
$(function(){
	$(window).scroll(function (){
		$('.slidein-left').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 10){
				$(this).addClass('scrollin-left');
			}
		});
	});
});

//文字タイピング風
$('.typ').each(function(){
    //一文字ずつ<span>で括る
    $(this).children().addBack().contents().each(function() {
        if (this.nodeType == 3) {
        $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
        }
    });

　　//inviewを使って画面に表れたら起動させる
    $(this).on('inview',function(){
        //一文字ずつ順番に不透明させる
        $(this).css({'opacity':1});
        for (var i = 0; i <= $(this).children('span').length; i++) {
        $(this).children('span').eq(i).delay(100*i).animate({'opacity':1},800);
        };
    });
});

//スムーススクロール
//#で始まるリンクをクリックした時
$('a[href^="#"]').click(function() {
    // スクロールの速度
    var speed = 700; // ミリ秒で記述
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({
      scrollTop: position
    }, speed, 'swing');
    return false;
  });

//MV背景横に動かす
$(window).on('scroll', function(){

    var scrollTop = $(window).scrollTop();
    var bgPosition = scrollTop / 2;

    if(bgPosition){
      $('.main').css('background-position', 'center left -'+ bgPosition + 'px');
    }
  });
