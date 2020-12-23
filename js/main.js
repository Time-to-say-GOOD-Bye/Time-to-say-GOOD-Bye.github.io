// init resize image map
imageMapResize();

// init video modal
new ModalVideo('.js-modal-btn');

// load cover video inline
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
 
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: 'HvR5X3ZVNsU',  // update this id
    playerVars: {
      playsinline: 1 
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange,
    }
  });
}

function onPlayerReady(event) {
    event.target.mute();
    event.target.playVideo();
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
       event.target.playVideo();
    }
}

// for gtag track

let area = document.getElementsByClassName("js-modal-btn");
for(i=0; i<area.length; i++){
  let target = area[i];
  let gtag = "gtag('event', 'Calendar_Click', {'event_category': '"+ target.title +"'});";

  target.setAttribute("onclick", gtag)
}


