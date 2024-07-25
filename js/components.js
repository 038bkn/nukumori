$(function () {
    $(".btn-gnavi").on("click", function () {
        // ハンバーガーメニューの位置を設定するための変数
        var rightVal = 0;
        if ($(this).hasClass("open")) {
            // 「open」クラスを持つ要素はメニューを開いた状態に設定
            rightVal = -300;
            // メニューを開いたら次回クリック時は閉じた状態になるよう設定
            $(this).removeClass("open");
        } else {
            // 「open」クラスを持たない要素はメニューを閉じた状態に設定(rightValは0の状態)
            // メニューを閉じたら次回クリック時は開いた状態になるよう設定
            $(this).addClass("open");
        }
        
        $("#global-navi").stop().animate({
            right: rightVal
        }, 200);
    });

    document.getElementById('form')?.addEventListener('submit', (e) => {
        e.preventDefault()
        alert("送信しました")
        document.getElementById('form').reset()
    })
});

// フェードイン
function showElementAnimation() {

    var element = document.getElementsByClassName('fade-in');
    if (!element) return;

    var showTiming = window.innerHeight > 768 ? 200 : 60;
    var scrollY = window.pageYOffset;
    var windowH = window.innerHeight;

    for (var i = 0; i < element.length; i++) {
        var elemClientRect = element[i].getBoundingClientRect(); var elemY = scrollY + elemClientRect.top; if (scrollY + windowH - showTiming > elemY) {
            element[i].classList.add('show');
        } else if (scrollY + windowH < elemY) {
        }
    }
}
showElementAnimation();
window.addEventListener('scroll', showElementAnimation);