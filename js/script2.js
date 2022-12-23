//이용자 가이드
function openPop(){
    var option="width=787,height=813,scrollbars=yes";
    window.open("./index_userGuide.html","",option);
    return false;
};
     
$('.zoom a').not().on('click',function(){
  
  let size=$('body').css("font-size");
  let zNum=$('.zoom a').index(this);
  let txt=$('.zoom span')
    if(zNum==1){
      $('body, h1, h2, h3, h4, h5, p, a, li, div,tbody, thead').not('#skip a').css("font-size",'+=.6');
      $('img').css("width",'+=.6');
      $('div').css("background-size",'+=.6');
      txt.text('110%');
      return false
    }else{
      $('body, h1, h2, h3, h4, h5, p, a, li, div').not('#skip a').css("font-size",'-=.6');
      $('img').css("width",'-=.6');
      $('div').css("background-size",'-=.6');
      txt.text('100%');
    }
    return false;
});

//footerBox
$('.footerBox').on({'click focusin':function(){
    $(this).addClass('on');
  }, 'focusout blur':function(){
    $(this).removeClass('on');
  }});