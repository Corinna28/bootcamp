document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"]; // Ajoutez vos noms d'images ici
  
    function showImage(index) {
      document.getElementById('carousel-image').src = images[index];
    }
  
    function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }
  
    function prevImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    }
  
    let intervalId;
  
    function startCarousel() {
      intervalId = setInterval(nextImage, 5000);
    }
  
    function stopCarousel() {
      clearInterval(intervalId);
    }
  
    const carouselContainer = document.getElementById('carousel-container');
  
    carouselContainer.addEventListener('mouseover', stopCarousel);
    carouselContainer.addEventListener('mouseout', startCarousel);
  
    document.getElementById('right-arrow').addEventListener('click', nextImage);
    document.getElementById('left-arrow').addEventListener('click', prevImage);
  
    startCarousel();
  });
  