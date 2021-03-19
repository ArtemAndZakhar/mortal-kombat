$(document).ready(function() {
    $('#app').vide({
    mp4: 'video/video.mp4',
    webm: 'video/video.webm',
    ogv: 'video/video.ogv',
    poster: 'img/cover-image.jpg'
    });
});
// var instance = new vidbg('#app', {
//     mp4: 'video/video.mp4', // URL or relative path to MP4 video
//     webm: 'video/video.webm', // URL or relative path to webm video
//     poster: 'img/cover-image.jpg', // URL or relative path to fallback image
//     overlay: false, // Boolean to display the overlay or not
//     // overlayColor: '#000', // The overlay color as a HEX
//     // overlayAlpha: 0.3 // The overlay alpha. Think of this as the last integer in RGBA()
//     }, {
//     // Attributes
//     })