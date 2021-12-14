/** @format */

$(function () {
  
    var visual = $(".slide>ul.slideUl>li");
    var current = 0;
    var setIntervalId;
    var leftBtn = $(".btn-prev .prev");
    var rightBtn = $(".btn-next .next");
    var button = $(".buttonList>li");
    console.log(button);
 
    timer();
   
    function timer() {
        setInterval(function () {
            //현재 보고있는 슬라이드 요소의 index 번호
            var prev = visual.eq(current);
            //console.log(prev);
            var prevBtn = button.eq(current);
            move(prev, 0, "-100%");
            prevBtn.removeClass("on");
            current++;
            //  console.log(visual.length - 1);
            if (current == visual.length) {
                current = 0;
            }
            var next = visual.eq(current);
            var nextBtn = button.eq(current);
            move(next, "100%", 0);
            nextBtn.addClass("on");
        }, 3000);
    }
    function move(target, start, end) {
        target.css("left", start).stop().animate({ left: end }, 500);
    }
    //좌우버튼 클릭시
    rightBtn.click(function () {
        var prev = visual.eq(current);
        var prevBtn = button.eq(current);
        move(prev, 0, "-100%");
        prevBtn.removeClass("on");
        current++;
        if (current == visual.length) {
            current = 0;
        }
        var next = visual.eq(current);
        var nextBtn = button.eq(current);
        move(next, "100%", 0);
        nextBtn.addClass("on");
    });
    leftBtn.click(function () {
        var prev = visual.eq(current);
        var prevBtn = button.eq(current);
        move(prev, 0, "100%");
        prevBtn.removeClass("on");
        current--;
        if (current == -visual.length) {
            current = 0;
        }
        var next = visual.eq(current);
        var nextBtn = button.eq(current);
        move(next, "-100%", "0");
        nextBtn.addClass("on");
    });
    button.click(function(){
        var tg=$(this);
        var i=tg.index();
        button.removeClass('on');
        tg.addClass('on');
        move1(i);
    
    })

    function move1(i) {
        if(current==i) return;
        var currentEl = visual.eq(current);
        var nextEl = visual.eq(i);
        currentEl.css("left", "0").stop().animate({ left: "-100%" }, 500);
        nextEl.css("left", "100%").stop().animate({ left: "0%" }, 500);
        current=i;
    }

    $("#wrap").on(
        {
            mouseover: function () {
                clearInterval(setIntervalId);
            }
        },
        {
            mouseout: function () {
                timer();
            }
        }
    );
});