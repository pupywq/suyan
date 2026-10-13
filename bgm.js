(function () {
    var audio = document.createElement('audio');
    audio.src = 'https://pupywq.github.io/suyan/%E9%9F%B3%E9%A2%91.mp3';
    audio.loop = true;
    audio.muted = true;
    audio.style.display = 'none';
    document.body.appendChild(audio);

    var saved = localStorage.getItem('bgm_time');
    if (saved) audio.currentTime = parseFloat(saved);

    var started = false;
    function startMusic() {
        if (started) return;
        started = true;
        audio.muted = false;
        audio.play().catch(function () {});
        document.removeEventListener('touchstart', startMusic);
        document.removeEventListener('click', startMusic);
    }

    // 如果之前已经点过播放，这次自动接着播
    if (localStorage.getItem('bgm_playing') === '1') {
        started = true;
        audio.play().catch(function () {});
    }

    document.addEventListener('touchstart', startMusic);
    document.addEventListener('click', startMusic);

    window.addEventListener('beforeunload', function () {
        localStorage.setItem('bgm_time', audio.currentTime);
        localStorage.setItem('bgm_playing', started ? '1' : '0');
    });
})();
