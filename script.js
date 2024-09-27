// Create the circle element
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

// Move the circle as the cursor moves
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});
$(document).ready(function() {
    var containerWidth = $('.carousel-container').width();
    var chevronOffset = 50; // How far out you want the chevrons to move
    
    $('.glyphicon-chevron-left').css('left', -chevronOffset + 'px');
    $('.glyphicon-chevron-right').css('right', -chevronOffset + 'px');
});

