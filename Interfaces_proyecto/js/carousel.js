const carousel = document.getElementById('carousel');
        let currentIndex = 0;

        function showSlide(index) {
            carousel.style.transform = `translateX(-${index * 100}%)`;
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % 3; // 3 es el número total de slides
            showSlide(currentIndex);
        }

        // Cambia de slide cada 5 segundos
        setInterval(nextSlide, 5000);