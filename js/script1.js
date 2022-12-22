//이용자 가이드
function openPop(){
    var option="width=787,height=813,scrollbars=yes";
    window.open("./index_userGuide.html","",option);
    return false;
};
     

//탭이동
$('#subPage').each(function(){
    let tabDiv=$(this);
    let anchors=tabDiv.find('.subTab ul li a');
    let conDiv=tabDiv.find('.main_con');
    let lastAnchor;
    let lastCon;

    lastAnchor=anchors.filter('.active');
    lastCon=$(lastAnchor.attr('href'));

    anchors.click(function(e){
        e.preventDefault();
        let currentAnchor=$(this);
        let currentcon=$(currentAnchor.attr('href'));
        lastAnchor.removeClass('active');
        currentAnchor.addClass('active');

        lastCon.hide();
        currentcon.show();

        lastAnchor=currentAnchor;
        lastCon=currentcon;
    });
});

//footerBox
$('.footerBox').on({'click focusin':function(){
    $(this).addClass('on');
  }, 'focusout blur':function(){
    $(this).removeClass('on');
  }});