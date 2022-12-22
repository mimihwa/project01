//이용자 가이드
function openPop(){
    var option="width=787,height=813,scrollbars=yes";
    window.open("./index_userGuide.html","",option);
    return false;
};
     
//footerBox
$('.footerBox').on({'click focusin':function(){
    $(this).addClass('on');
  }, 'focusout blur':function(){
    $(this).removeClass('on');
  }});