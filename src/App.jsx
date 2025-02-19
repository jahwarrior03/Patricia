import { useState, useEffect, useCallback, useRef } from 'react'
import './App.css'

// Array of image paths
const images = [
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_6947.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_4925.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_4506.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_3024.JPG',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_2763.JPG',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_2745.JPG',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_2685.JPG',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_2672.JPG',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_2655.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_2626.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_2606.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_2604.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_2602.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_2363.JPG',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_2341.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_2295.JPG',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_2181.JPG',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_2172.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_2144.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_2142.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_2058.JPG',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_2057.JPG',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_2056.JPG',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_1440.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_1438.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_1427.JPG',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_1320.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_1318.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_1195.JPG',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_0972.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_0719.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_0650.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_0571.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_0570.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_0569.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_0567.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_0525.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_0524.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_0472.JPG',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_0426.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_0402.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_0399.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_0392.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_0348.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_0337.JPG',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_0336.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_0332.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_0329.JPG',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_9560.JPG',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_8014.JPG',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_5992.JPG',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_5116.JPG',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_5104.JPG',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_17.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_16.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_15.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_14.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_13.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_12.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_11.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_10.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_09.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_08.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_07.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_06.jpeg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/IMG_05.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/FB_IMG_1739809241915.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/FB_IMG_1739809170749.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/FB_IMG_1739810021019.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/FB_IMG_1739809349649.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/FB_IMG_1739809779896.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/FB_IMG_1739810133214.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/FB_IMG_1739809222685.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/FB_IMG_1739810104532.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/FB_IMG_1739809949124.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/FB_IMG_1739809439370.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/FB_IMG_1739809580152.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/FB_IMG_1739809418186.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/FB_IMG_1739809799456.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/FB_IMG_1739809279699.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/FB_IMG_1739809981877.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/FB_IMG_1739809734805.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/FB_IMG_1739809644019.jpg',
    'https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/FB_IMG_1739809714371.jpg'
];

const durations = [3, 5, 10, 15]; // Available durations in seconds

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [duration, setDuration] = useState(5)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [durationIndex, setDurationIndex] = useState(1)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isMuted, setIsMuted] = useState(false)
  const [audioLoaded, setAudioLoaded] = useState(false)
  const [volume, setVolume] = useState(50)
  const [audioError, setAudioError] = useState(null)
  const audioRef = useRef(null)

  // Initialize audio and add event listeners
  useEffect(() => {
    if (audioRef.current) {
      console.log('Audio element initialized');
      
      const audio = audioRef.current;
      audio.volume = volume / 100;

      const handleCanPlay = () => {
        console.log('Audio can play');
        setAudioLoaded(true);
      };

      const handleError = (error) => {
        console.error('Audio error:', error);
        setAudioError(error.message);
      };

      const handlePlay = () => {
        console.log('Audio started playing');
      };

      const handleLoadStart = () => {
        console.log('Audio started loading');
      };

      audio.addEventListener('canplay', handleCanPlay);
      audio.addEventListener('error', handleError);
      audio.addEventListener('play', handlePlay);
      audio.addEventListener('loadstart', handleLoadStart);

      return () => {
        audio.removeEventListener('canplay', handleCanPlay);
        audio.removeEventListener('error', handleError);
        audio.removeEventListener('play', handlePlay);
        audio.removeEventListener('loadstart', handleLoadStart);
      };
    }
  }, []);

  // Handle user interaction to start audio
  useEffect(() => {
    const startAudio = async () => {
      if (audioRef.current && !audioLoaded) {
        try {
          console.log('Attempting to play audio...');
          await audioRef.current.play();
          console.log('Audio play successful');
          setAudioLoaded(true);
          document.removeEventListener('click', startAudio);
        } catch (error) {
          console.error('Audio play failed:', error);
          setAudioError(error.message);
        }
      }
    };

    const handleVisibilityChange = () => {
      if (!document.hidden && audioRef.current && audioLoaded && !isMuted) {
        audioRef.current.play().catch(console.error);
      }
    };

    document.addEventListener('click', startAudio);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('click', startAudio);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [audioLoaded, isMuted]);

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

  const handleVolumeChange = useCallback((e) => {
    const newVolume = Number(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
      if (newVolume === 0) {
        setIsMuted(true);
        audioRef.current.pause();
      } else {
        setIsMuted(false);
        if (audioLoaded) {
          audioRef.current.play().catch(console.error);
        }
      }
    }
  }, [audioLoaded]);

  const toggleMute = useCallback(() => {
    if (audioRef.current) {
      console.log('Toggle mute clicked');
      if (!audioLoaded) {
        console.log('First play attempt');
        audioRef.current.play()
          .then(() => {
            console.log('First play successful');
            setAudioLoaded(true);
            setIsMuted(false);
            audioRef.current.volume = volume / 100;
          })
          .catch(error => {
            console.error('First play failed:', error);
            setAudioError(error.message);
          });
      } else {
        if (isMuted) {
          console.log('Unmuting');
          audioRef.current.volume = volume / 100;
          audioRef.current.play()
            .then(() => console.log('Unmute successful'))
            .catch(error => {
              console.error('Unmute failed:', error);
              setAudioError(error.message);
            });
        } else {
          console.log('Muting');
          audioRef.current.volume = 0;
          audioRef.current.pause();
        }
        setIsMuted(prev => !prev);
      }
    }
  }, [isMuted, audioLoaded, volume]);

  return (
    <>
      <audio
        ref={audioRef}
        src="https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/assets/funeral-165257.mp3"
        loop
        preload="auto"
        onError={(e) => {
          console.error('Audio element error:', e);
          setAudioError(e.message);
        }}
      />
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
      <img src="https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/images/animated-hummingbird-image-0031.gif" alt="Decorative Hummingbird" className="animated-bird position-1" />
      <img src="https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/images/animated-hummingbird-image-0022.gif" alt="Decorative Hummingbird" className="animated-bird position-2" />
      <img src="https://raw.githubusercontent.com/jahwarrior03/Patricia/refs/heads/main/images/animated-hummingbird-image-0024.gif" alt="Decorative Hummingbird" className="animated-bird position-3" />
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
              <div className="volume-control">
                <div 
                  className={`tv-button volume ${isMuted ? 'muted' : ''}`} 
                  title="Toggle Sound"
                  onClick={toggleMute}
                ></div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="volume-slider"
                  title="Adjust Volume"
                />
              </div>
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