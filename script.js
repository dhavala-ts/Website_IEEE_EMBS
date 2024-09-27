// Create the circle element
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

// Move the circle as the cursor moves
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});
const videos = [
    { video: document.getElementById('myVideo1'), container: document.getElementById('videoContainer1') },
    { video: document.getElementById('myVideo2'), container: document.getElementById('videoContainer2') }
];

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Play or pause videos based on their visibility and click events
function checkVideoPlayback() {
    videos.forEach(({ video, container }) => {
        if (isInViewport(container)) {
            if (video.paused) {
                video.play();
            }
        } else {
            if (!video.paused) {
                video.pause();
            }
        }
    });
}

// Toggle play/pause on click
videos.forEach(({ video }) => {
    video.addEventListener('click', () => {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});

// Event listeners for scrolling and resizing
window.addEventListener('scroll', checkVideoPlayback);
window.addEventListener('resize', checkVideoPlayback);
$(document).ready(function() {
    var containerWidth = $('.carousel-container').width();
    var chevronOffset = 50; // How far out you want the chevrons to move
    
    $('.glyphicon-chevron-left').css('left', -chevronOffset + 'px');
    $('.glyphicon-chevron-right').css('right', -chevronOffset + 'px');
});

