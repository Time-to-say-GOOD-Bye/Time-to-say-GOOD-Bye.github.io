imageMapResize();
$(function(){
    $(".btn-gnavi").on("click", function(){
        // ハンバーガーメニューの位置を設定
        var rightVal = 0;
        if($(this).hasClass("open")) {
            // 位置を移動させメニューを開いた状態にする
            rightVal = -300;
            // メニューを開いたら次回クリック時は閉じた状態になるよう設定
            $(this).removeClass("open");
        } else {
            // メニューを開いたら次回クリック時は閉じた状態になるよう設定
            $(this).addClass("open");
        }
 
        $("#global-navi").stop().animate({
            right: rightVal
        }, 200);
    });
});

// // Load the IFrame Player API code asynchronously.
// var tag = document.createElement('script');
// tag.src = "https://www.youtube.com/player_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// // Replace the 'ytplayer' element with an <iframe> and
// // YouTube player after the API code downloads.
// var player;
// function onYouTubePlayerAPIReady() {
//   player = new YT.Player('video_wrapper', {
//     height: '360',
//     width: '640',
//     videoId: 'Q9oUQYsApxg',
//     events: {
//         'onReady': onPlayerReady,
//       }
//   });
// }

// function onPlayerReady(event) {
//     event.target.playVideo();
//     console.log("aa")
//   }