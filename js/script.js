//이용자 가이드
function openPop(){
    var option="width=787,height=813,scrollbars=yes";
    window.open("./index_userGuide.html","",option);
    return false;
};

//확대/축소

/* $(function (){
  var fontSize = $('html').css("font-size");
  var index = fontSize.replace("px","");
  var ratio = $("#gnb .ratio span").html();
  $("#gnb .minus a.btn").click(function(){
    if(index == 14) return false;
    index--;
    $("html").css("font-size",index+"px");
    ratio = Number(ratio) - 10;
    $("#gnb .ratio span").html(ratio);
  });
  $("#gnb .plus a.btn").click(function(){
    if(index == 16) return false;
    index++;
    $("html").css("font-size",index+"px");
    ratio = Number(ratio) + 10;
    $("#gnb .ratio span").html(ratio);
  });
}); */


$('.zoom a').not().on('click',function(){
  
  let size=$('body').css("font-size");
  let zNum=$('.zoom a').index(this);
  let txt=$('.zoom span')
    if(zNum==1){
      $('body, h1, h2, h3, h4, h5, p').css("font-size",'+=.8');
      $('img').not('.visual-bg1', '.localselect').css("width",'+=.8');
      $('a').not('#skip a').css("font-size",'+=.8');
      $('div').not('.visual-bg1, .localselect, .tab').css("background-size",'+=.6');
      txt.text('110%');
      return false
    }else{
      $('body, h1, h2, h3, h4, h5, p').css("font-size",'-=.8');
      $('img').css("width",'-=.8');
      $('a').not('#skip a').css("font-size",'-=.8');
      $('div').not('.visual-bg1, .localselect, .tab').css("background-size",'-=.6');
      txt.text('100%');
    }

    return false;
});

            
//검색bar
function fn_onfocus(){
    $('.search-box').focus();
    onchange={onchange};
};

// content1(tab)
$('.status').each(function(){
  let statusDiv=$(this);
  let anchors=statusDiv.find('.tab li a');
  let typeDiv=statusDiv.find('.statusType');
  let lastAnchor;
  let lastType;

  lastAnchor=anchors.filter('.on');
  lastType=$(lastAnchor.attr('href'));

  anchors.click(function(e){
      e.preventDefault();
      let currentAnchor=$(this);
      let currentType=$(currentAnchor.attr('href'));
      lastAnchor.removeClass('on');
      currentAnchor.addClass('on');

      lastType.hide();
      currentType.show();

      lastAnchor=currentAnchor;
      lastType=currentType;
  });
});

// content1(selectBox)
$('.selectBox').on({'click focusin':function(){
  $(this).addClass('on');
}, 'focusout':function(){
  $(this).removeClass('on');
}});

// content1(open-info)
$('.cont2').each(function(){
  let contDiv=$(this);
  let anchors=contDiv.find('.open-select li a');
  let infoDiv=contDiv.find('.open-info');
  let lastAnchor;
  let lastInfo;

  lastAnchor=anchors.filter('.on');
  lastInfo=$(lastAnchor.attr('href'));

  anchors.click(function(e){
      e.preventDefault();
      let currentAnchor=$(this);
      let currentInfo=$(currentAnchor.attr('href'));
      lastAnchor.removeClass('on');
      currentAnchor.addClass('on');

      lastInfo.hide();
      currentInfo.show();

      lastAnchor=currentAnchor;
      lastInfo=currentInfo;
  });
});

//content2 클릭배너
//테마 슬라이드
  
var theme = $(".slideList");
var themeUl = theme.find("ul");
var themeLeng = themeUl.find("li").length;
var themeListWidth;
var themeUlWidth;
var themeCount;
var pageWidth;
var btnUl = $(".slideBtn ul");
var pages;

// 테마 초기화 
function setThemeSlide(){
  themeIndex = 0;
  themeUl.css("margin-left","0px"); // 위치
  themeUl.css("width","100%"); // 목록 너비
  if(document.body.clientWidth > 480){
    themeListWidth = themeUl.find("li").outerWidth();
    themeUlWidth = themeListWidth * themeLeng;
    themeUl.css("width",themeUlWidth+"px");
    themeCount = parseInt(theme.outerWidth() / themeListWidth); // 화면내 보이는 목록수
    pageWidth = themeListWidth * themeCount; //페이지 너비
    pages = Math.ceil(themeLeng / themeCount); //페이지 수
    
    //버튼 목록 생성
    btnUl.empty();
    for(i=0; i<pages; i++){
      btnUl.append("<li class='item"+(i+1)+"'><a href='javascript:;' data-index='"+i+"'></a></li>");
    }
    $(".slideBtn ul li.item1").addClass("active");
  }
}
setThemeSlide();

function themeMove(num) {
  if(num >= pages){ 
    num = 0; themeIndex=0; 
  }else if(num < 0){
    num = pages-1; themeIndex=pages-1; 
  }
  $(".slideBtn ul li.item"+(num+1)).addClass("active").siblings("li").removeClass("active");
  themeUl.animate({
    marginLeft: -(pageWidth * num)+"px",
  }, 300 );
  index++;
  return false;
}

$(".slideBtn a.slidePrev").click(function(){
  themeIndex--;
  themeMove(themeIndex);
  return false;
});

$(".slideBtn a.slideNext").click(function(){
  themeIndex++;
  themeMove(themeIndex);
  return false;
});

$(".slideBtn ul li a").click(function(){
  themeIndex = $(this).attr("data-index");
  $(this).parents("li").addClass("active").siblings("li").removeClass("active");
  themeMove(themeIndex);
  return false;
});

//리사이즈 완료 후 실행
var id2;
$(window).resize(function() {
    clearTimeout(id2);
    id2 = setTimeout(setThemeSlide, 500);
});


// content3(boardList)
$('.boardList').each(function(){
  let boardDiv=$(this);
  let anchors=boardDiv.find('.menu li a');
  let bADiv=boardDiv.find('.bA');
  let lastAnchor;
  let lastBA;

  lastAnchor=anchors.filter('.on');
  lastBA=$(lastAnchor.attr('href'));

  anchors.click(function(e){
      e.preventDefault();
      let currentAnchor=$(this);
      let currentBA=$(currentAnchor.attr('href'));
      lastAnchor.removeClass('on');
      currentAnchor.addClass('on');

      lastBA.hide();
      currentBA.show();

      lastAnchor=currentAnchor;
      lastBA=currentBA;
  });
});



//하단 롤링배너(링크) 
var $banner = $(".bannerList ul");
var $bannerHeight = $banner.children().outerHeight(); // 높이
var $bannerWidth = $banner.children().outerWidth();//이미지의 폭
var $length = $banner.children().length;//이미지의 갯수
var rollingId;
const stopB=$('.stop');
const prev=$('.prev');
const next=$('.next');

//정해진 초마다 함수 실행
$(document).ready(function(){
    rollingId = setInterval(function(){
        rollingStart();
    },1500);//다음 이미지로 롤링 애니메이션 할 시간차

    function rollingStart() {
        $banner.css("width", ($bannerWidth * $length) + "px");
        $banner.css("height", $bannerHeight + "px");
        //배너의 좌측 위치를 옮겨 준다.
        $banner.animate({'margin-left': - $bannerWidth + "px"}, 1000, function() { //숫자는 롤링 진행되는 시간이다.
            //첫번째 이미지를 마지막 끝에 복사(이동이 아니라 복사)해서 추가한다.
            $(this).append("<li>" + $(this).find("li:first").html() + "</li>");
            //뒤로 복사된 첫번재 이미지는 필요 없으니 삭제한다.
            $(this).find("li:first").remove();
            //다음 움직임을 위해서 배너 좌측의 위치값을 초기화 한다.
            $(this).css("margin-left", 0);
            //이 과정을 반복하면서 계속 롤링하는 배너를 만들 수 있다.
        });
    };
    stopB.click(function(){ 
        if(stopB.hasClass('stop')){
            stopB.removeClass('stop');
            clearInterval(rollingId);
            return false;

        }else{
            stopB.addClass('stop');
            rollingId = setInterval(function(){
                rollingStart();
            },1500);
            return false;
        };
    });

    prev.click(function(){
        clearInterval(rollingId);
        $banner.stop().animate({'margin-left': - $bannerWidth + "px"},500,function(){
            $(this).children("li:first").insertAfter($(this).children("li:last"));
            $(this).css({'margin-left':0})
        });
    }); 

    next.click(function(){
        clearInterval(rollingId);
        $banner.children("li:last").insertBefore($banner.children("li:first"));
        $banner.css({'margin-left':-$bannerWidth + "px"},500);
        $banner.stop().animate({'margin-left':0});
           
    });
    
}); 

//footerBox
$('.footerBox').on({'click focusin':function(){
  $(this).addClass('on');
}, 'focusout blur':function(){
  $(this).removeClass('on');
}});

