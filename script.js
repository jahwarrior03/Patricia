// Array of image paths from assets folder
const images = [
    'assets/IMG_6947.jpg',
    'assets/IMG_4925.jpg',
    'assets/IMG_4506.jpg',
    'assets/IMG_3024.JPG',
    'assets/IMG_2763.JPG',
    'assets/IMG_2745.JPG',
    'assets/IMG_2685.JPG',
    'assets/IMG_2672.JPG',
    'assets/IMG_2655.jpg',
    'assets/IMG_2626.jpg',
    'assets/IMG_2606.jpg',
    'assets/IMG_2604.jpg',
    'assets/IMG_2602.jpg',
    'assets/IMG_2363.JPG',
    'assets/IMG_2341.jpg',
    'assets/IMG_2295.JPG',
    'assets/IMG_2181.JPG',
    'assets/IMG_2172.jpg',
    'assets/IMG_2144.jpg',
    'assets/IMG_2142.jpg',
    'assets/IMG_2058.JPG',
    'assets/IMG_2057.JPG',
    'assets/IMG_2056.JPG',
    'assets/IMG_1440.jpg',
    'assets/IMG_1438.jpg',
    'assets/IMG_1427.JPG',
    'assets/IMG_1320.jpg',
    'assets/IMG_1318.jpg',
    'assets/IMG_1195.JPG',
    'assets/IMG_0972.jpg',
    'assets/IMG_0719.jpg',
    'assets/IMG_0650.jpg',
    'assets/IMG_0571.jpg',
    'assets/IMG_0570.jpg',
    'assets/IMG_0569.jpg',
    'assets/IMG_0567.jpg',
    'assets/IMG_0525.jpg',
    'assets/IMG_0524.jpg',
    'assets/IMG_0472.JPG',
    'assets/IMG_0426.jpg',
    'assets/IMG_0402.jpg',
    'assets/IMG_0399.jpg',
    'assets/IMG_0392.jpg',
    'assets/IMG_0348.jpg',
    'assets/IMG_0337.JPG',
    'assets/IMG_0336.jpg',
    'assets/IMG_0332.jpg',
    'assets/IMG_0329.JPG',
    'assets/IMG_9560.JPG',
    'assets/IMG_8014.JPG',
    'assets/IMG_5992.JPG',
    'assets/IMG_5116.JPG',
    'assets/IMG_5104.JPG',
    'assets/IMG_17.jpg',
    'assets/IMG_16.jpg',
    'assets/IMG_15.jpg',
    'assets/IMG_14.jpg',
    'assets/IMG_13.jpg',
    'assets/IMG_12.jpg',
    'assets/IMG_11.jpg',
    'assets/IMG_10.jpg',
    'assets/IMG_09.jpg',
    'assets/IMG_08.jpg',
    'assets/IMG_07.jpg',
    'assets/IMG_06.jpeg',
    'assets/IMG_05.jpg'
];

let currentImageIndex = 0;
const slideshowContainer = document.querySelector('.slideshow-container');
const tvButton = document.querySelector('.tv-button');
let slideshowInterval;
let isPlaying = true;

// Get control elements
const prevButton = document.querySelector('.tv-button.prev');
const playPauseButton = document.querySelector('.tv-button.play-pause');
const nextButton = document.querySelector('.tv-button.next');
const durationButton = document.querySelector('.tv-button.duration');
const fullscreenButton = document.querySelector('.tv-button.fullscreen');
const tvControls = document.querySelector('.tv-controls');

let currentDuration = 5000; // Default 5 seconds
const durations = [3000, 5000, 10000, 15000]; // Available durations in milliseconds
let currentDurationIndex = 1; // Start with 5 seconds selected

// Preload images
function preloadImages() {
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Create and load images
function createSlideshow() {
    images.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Memorial Photo ${index + 1}`;
        
        // Handle image loading
        img.onload = function() {
            // Add active class to first image once it's loaded
            if (index === 0) {
                img.classList.add('active');
            }
            // Force a reflow to ensure proper scaling
            img.style.display = 'none';
            img.offsetHeight; // trigger reflow
            img.style.display = '';
        };
        
        slideshowContainer.appendChild(img);
    });
}

// Function to change slides with crossfade
function changeSlide() {
    const slides = document.querySelectorAll('.slideshow-container img');
    if (slides.length === 0) return;
    
    slides[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % slides.length;
    
    // Ensure the next image is loaded before showing it
    const nextImage = slides[currentImageIndex];
    if (nextImage.complete) {
        nextImage.classList.add('active');
    } else {
        nextImage.onload = () => nextImage.classList.add('active');
    }
}

// Function to change duration
function changeDuration() {
    currentDurationIndex = (currentDurationIndex + 1) % durations.length;
    currentDuration = durations[currentDurationIndex];
    durationButton.textContent = currentDuration / 1000;
    
    if (isPlaying) {
        stopSlideshow();
        startSlideshow();
    }
}

// Start slideshow
function startSlideshow() {
    if (!slideshowInterval) {
        slideshowInterval = setInterval(changeSlide, currentDuration);
    }
}

// Stop slideshow
function stopSlideshow() {
    if (slideshowInterval) {
        clearInterval(slideshowInterval);
        slideshowInterval = null;
    }
}

// Previous slide function
function previousSlide() {
    const slides = document.querySelectorAll('.slideshow-container img');
    if (slides.length === 0) return;
    
    slides[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex - 1 + slides.length) % slides.length;
    slides[currentImageIndex].classList.add('active');
}

// Next slide function
function nextSlide() {
    const slides = document.querySelectorAll('.slideshow-container img');
    if (slides.length === 0) return;
    
    slides[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % slides.length;
    slides[currentImageIndex].classList.add('active');
}

// Toggle play/pause
function togglePlayPause() {
    isPlaying = !isPlaying;
    if (isPlaying) {
        startSlideshow();
        playPauseButton.classList.remove('paused');
    } else {
        stopSlideshow();
        playPauseButton.classList.add('paused');
    }
}

// Add event listeners for controls
prevButton.addEventListener('click', () => {
    previousSlide();
    if (isPlaying) {
        stopSlideshow();
        startSlideshow();
    }
});

nextButton.addEventListener('click', () => {
    nextSlide();
    if (isPlaying) {
        stopSlideshow();
        startSlideshow();
    }
});

playPauseButton.addEventListener('click', togglePlayPause);

// Add click event for duration button
durationButton.addEventListener('click', changeDuration);

// Function to toggle fullscreen
function toggleFullscreen() {
    const container = slideshowContainer;
    
    if (!document.fullscreenElement &&
        !document.mozFullScreenElement &&
        !document.webkitFullscreenElement &&
        !document.msFullscreenElement) {
        // Enter fullscreen
        if (container.requestFullscreen) {
            container.requestFullscreen();
        } else if (container.msRequestFullscreen) {
            container.msRequestFullscreen();
        } else if (container.mozRequestFullScreen) {
            container.mozRequestFullScreen();
        } else if (container.webkitRequestFullscreen) {
            container.webkitRequestFullscreen();
        }
        container.classList.add('fullscreen');
        tvControls.classList.add('fullscreen');
        fullscreenButton.classList.add('active');
    } else {
        // Exit fullscreen
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        container.classList.remove('fullscreen');
        tvControls.classList.remove('fullscreen');
        fullscreenButton.classList.remove('active');
    }
}

// Add fullscreen change event listener
document.addEventListener('fullscreenchange', function() {
    if (!document.fullscreenElement) {
        slideshowContainer.classList.remove('fullscreen');
        tvControls.classList.remove('fullscreen');
        fullscreenButton.classList.remove('active');
    }
});

// Add click event for fullscreen button
fullscreenButton.addEventListener('click', toggleFullscreen);

// Add escape key listener for fullscreen
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && document.fullscreenElement) {
        toggleFullscreen();
    }
});

// Initialize slideshow
preloadImages();
createSlideshow();
startSlideshow();
playPauseButton.classList.remove('paused'); 