
//탭이동
$('#userGuide').each(function(){
    let tabDiv=$(this);
    let anchors=tabDiv.find('.guideTab ul li a');
    let conDiv=tabDiv.find('.tabContent');
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
