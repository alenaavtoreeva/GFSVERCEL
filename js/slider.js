	document.addEventListener("DOMContentLoaded", function () {
    // Находим все маленькие картинки
    const smallImages = document.querySelectorAll('.image-only');

    smallImages.forEach(function(smallImage) {
        smallImage.addEventListener('click', function() {
            const clickedSmallImage = smallImage.querySelector('img');
            const serviceDiv = document.querySelector('.service.div5');
            const clickedSmallImageSrc = clickedSmallImage.src;
            const clickedSmallImageAlt = clickedSmallImage.alt;

            // Сохраняем информацию о текущей большой картинке
            const serviceImg = serviceDiv.querySelector('img');
            const serviceImgSrc = serviceImg.src;
            const serviceImgAlt = serviceImg.alt;

            // Меняем изображения и текст
            serviceImg.src = clickedSmallImageSrc;
            serviceImg.alt = clickedSmallImageAlt;

            clickedSmallImage.src = serviceImgSrc;
            clickedSmallImage.alt = serviceImgAlt;
        });
    });
});