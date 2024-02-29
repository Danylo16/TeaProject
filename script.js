const swiper = new Swiper('.swiper',{
    autoplay:{
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: true
    },
    speed: 800,
    loop: true
});


function soundClick() {
    var audio = document.getElementById('audio');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0;
    }
}
