document.addEventListener('DOMContentLoaded', function() {
    var modal = document.querySelector('.modal');
    var modalImg = document.getElementById('modal-image');
    var closeBtn = document.querySelector('.close');
    var galleryItems = document.querySelectorAll('.gallery-item img');

    galleryItems.forEach(function(item) {
        item.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
