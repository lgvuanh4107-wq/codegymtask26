function changeVideo(videoUrl, titleText, event) {
    document.getElementById('main-video').src = videoUrl;
    document.getElementById('video-title').innerText = titleText;
    
    var items = document.querySelectorAll('.left-content ul li');
    items.forEach(function(item) {
        item.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
}