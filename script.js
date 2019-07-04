$(function () {
    $('.ml11 .letters').each(function(){
        $(this).html($(this).text().replace(/([^\x20]|\w)/g, "<span class='letter'>$&</span>"));
        $(this).css('visibility', 'visible');
    });
  
    anime.timeline()
        .add({
            targets: '.ml11 .line',
            scaleY: [0,1],
            opacity: [0.5,1],
            easing: "easeOutExpo",
            duration: 700
        })
        .add({
            targets: '.ml11 .line',
            translateX: [0,$(".ml11 .letters").width()],
            easing: "easeOutExpo",
            duration: 700,
            delay: 100
        })
        .add({
            targets: '.ml11 .letter',
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 600,
            offset: '-=775',
            delay: function(el, i) {
                return 34 * (i+1)
            }
        })
        .add({
            targets: '.line',
            opacity: 0,
            duration: 200,
            easing: "easeOutExpo",
            delay: 200
        })
        .add({
            targets: '.title',
            opacity: 1,
            translateY: [-25, 0]

        })
        .add({
            targets: '.icon',
            opacity: 1,
            translateX: [-100, 0],
            offset: '-=400'
        })
        .add({
            targets: '.icon-name',
            opacity: 1,
            offset: '-=400'
        })
        .add({
            targets: '.email',
            opacity: 1,
            translateY: [100, 0],
            offset: '-=700'
        });
});