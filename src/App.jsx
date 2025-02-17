import { useState, useEffect, useCallback } from 'react'
import './App.css'

// Array of image paths
const images = [
    '/assets/IMG_6947.jpg',
    '/assets/IMG_4925.jpg',
    '/assets/IMG_4506.jpg',
    '/assets/IMG_3024.JPG',
    '/assets/IMG_2763.JPG',
    '/assets/IMG_2745.JPG',
    '/assets/IMG_2685.JPG',
    '/assets/IMG_2672.JPG',
    '/assets/IMG_2655.jpg',
    '/assets/IMG_2626.jpg',
    '/assets/IMG_2606.jpg',
    '/assets/IMG_2604.jpg',
    '/assets/IMG_2602.jpg',
    '/assets/IMG_2363.JPG',
    '/assets/IMG_2341.jpg',
    '/assets/IMG_2295.JPG',
    '/assets/IMG_2181.JPG',
    '/assets/IMG_2172.jpg',
    '/assets/IMG_2144.jpg',
    '/assets/IMG_2142.jpg',
    '/assets/IMG_2058.JPG',
    '/assets/IMG_2057.JPG',
    '/assets/IMG_2056.JPG',
    '/assets/IMG_1440.jpg',
    '/assets/IMG_1438.jpg',
    '/assets/IMG_1427.JPG',
    '/assets/IMG_1320.jpg',
    '/assets/IMG_1318.jpg',
    '/assets/IMG_1195.JPG',
    '/assets/IMG_0972.jpg',
    '/assets/IMG_0719.jpg',
    '/assets/IMG_0650.jpg',
    '/assets/IMG_0571.jpg',
    '/assets/IMG_0570.jpg',
    '/assets/IMG_0569.jpg',
    '/assets/IMG_0567.jpg',
    '/assets/IMG_0525.jpg',
    '/assets/IMG_0524.jpg',
    '/assets/IMG_0472.JPG',
    '/assets/IMG_0426.jpg',
    '/assets/IMG_0402.jpg',
    '/assets/IMG_0399.jpg',
    '/assets/IMG_0392.jpg',
    '/assets/IMG_0348.jpg',
    '/assets/IMG_0337.JPG',
    '/assets/IMG_0336.jpg',
    '/assets/IMG_0332.jpg',
    '/assets/IMG_0329.JPG',
    '/assets/IMG_9560.JPG',
    '/assets/IMG_8014.JPG',
    '/assets/IMG_5992.JPG',
    '/assets/IMG_5116.JPG',
    '/assets/IMG_5104.JPG',
    '/assets/IMG_17.jpg',
    '/assets/IMG_16.jpg',
    '/assets/IMG_15.jpg',
    '/assets/IMG_14.jpg',
    '/assets/IMG_13.jpg',
    '/assets/IMG_12.jpg',
    '/assets/IMG_11.jpg',
    '/assets/IMG_10.jpg',
    '/assets/IMG_09.jpg',
    '/assets/IMG_08.jpg',
    '/assets/IMG_07.jpg',
    '/assets/IMG_06.jpeg',
    '/assets/IMG_05.jpg'
];

const durations = [3, 5, 10, 15]; // Available durations in seconds

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [duration, setDuration] = useState(5)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [durationIndex, setDurationIndex] = useState(1)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  // Preload images
  useEffect(() => {
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Handle fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  // Slideshow interval
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentImageIndex(prev => (prev + 1) % images.length);
      }, duration * 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, duration]);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const previousSlide = useCallback(() => {
    setCurrentImageIndex(prev => (prev - 1 + images.length) % images.length);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentImageIndex(prev => (prev + 1) % images.length);
  }, []);

  const togglePlayPause = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  const changeDuration = useCallback(() => {
    setDurationIndex(prev => (prev + 1) % durations.length);
    setDuration(durations[(durationIndex + 1) % durations.length]);
  }, [durationIndex]);

  const toggleFullscreen = useCallback(async () => {
    try {
      if (!document.fullscreenElement) {
        const container = document.querySelector('.slideshow-container');
        if (container.requestFullscreen) {
          await container.requestFullscreen();
        } else if (container.webkitRequestFullscreen) {
          await container.webkitRequestFullscreen();
        } else if (container.msRequestFullscreen) {
          await container.msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          await document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          await document.msExitFullscreen();
        }
      }
    } catch (err) {
      console.log(`Error toggling fullscreen: ${err.message}`);
    }
  }, []);

  return (
    <>
      <div 
        className="cursor-hummingbird"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`
        }}
      ></div>
      <div className="decorative-hummingbird left"></div>
      <div className="decorative-hummingbird right"></div>
      <div className="decorative-flower top-left"></div>
      <div className="decorative-flower top-right"></div>
      <div className="decorative-flower middle-top-left"></div>
      <div className="decorative-flower middle-top-right"></div>
      <div className="decorative-flower middle-left"></div>
      <div className="decorative-flower middle-right"></div>
      <div className="decorative-flower middle-bottom-left"></div>
      <div className="decorative-flower middle-bottom-right"></div>
      <div className="decorative-flower bottom-left"></div>
      <div className="decorative-flower bottom-right"></div>
      <img src="/images/animated-hummingbird-image-0031.gif" alt="Decorative Hummingbird" className="animated-bird position-1" />
      <img src="/images/animated-hummingbird-image-0022.gif" alt="Decorative Hummingbird" className="animated-bird position-2" />
      <img src="/images/animated-hummingbird-image-0024.gif" alt="Decorative Hummingbird" className="animated-bird position-3" />
      <div className="main-container">
        <h1 className="memorial-text">In Loving Memory of Patricia Galcatcher</h1>
        <div className="tv-container">
          <div className="tv-frame">
            <div className="tv-screen">
              <div className="tv-effect"></div>
              <div className={`slideshow-container ${isFullscreen ? 'fullscreen' : ''}`}>
                {images.map((src, index) => (
                  <img
                    key={src}
                    src={src}
                    alt={`Memorial Photo ${index + 1}`}
                    className={index === currentImageIndex ? 'active' : ''}
                    style={{ display: 'block' }}
                  />
                ))}
              </div>
            </div>
            <div className={`tv-controls ${isFullscreen ? 'fullscreen' : ''}`}>
              <div className="tv-button prev" title="Previous Image" onClick={previousSlide}></div>
              <div 
                className={`tv-button play-pause ${!isPlaying ? 'paused' : ''}`} 
                title="Play/Pause Slideshow"
                onClick={togglePlayPause}
              ></div>
              <div className="tv-button next" title="Next Image" onClick={nextSlide}></div>
              <div 
                className="tv-button duration" 
                title="Change Slideshow Duration"
                onClick={changeDuration}
              >{duration}</div>
              <div 
                className={`tv-button fullscreen ${isFullscreen ? 'active' : ''}`} 
                title="Toggle Fullscreen"
                onClick={toggleFullscreen}
              ></div>
              <div className="tv-indicator"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App 