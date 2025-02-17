import React, { useState, useEffect } from 'react';
import TVControls from './TVControls';

const images = [
    'assets/IMG_6947.jpg',
    'assets/IMG_4925.jpg',
    // ... rest of your images array
];

function TVSlideshow() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [duration, setDuration] = useState(5000);
    const [isFullscreen, setIsFullscreen] = useState(false);

    useEffect(() => {
        let interval;
        if (isPlaying) {
            interval = setInterval(() => {
                setCurrentImageIndex((prev) => (prev + 1) % images.length);
            }, duration);
        }
        return () => clearInterval(interval);
    }, [isPlaying, duration]);

    const handlePrevious = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const togglePlayPause = () => {
        setIsPlaying((prev) => !prev);
    };

    const handleDurationChange = () => {
        const durations = [3000, 5000, 10000, 15000];
        const currentIndex = durations.indexOf(duration);
        const nextIndex = (currentIndex + 1) % durations.length;
        setDuration(durations[nextIndex]);
    };

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.querySelector('.slideshow-container').requestFullscreen();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };

    return (
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
                            />
                        ))}
                    </div>
                </div>
                <TVControls
                    isPlaying={isPlaying}
                    duration={duration / 1000}
                    isFullscreen={isFullscreen}
                    onPrevious={handlePrevious}
                    onNext={handleNext}
                    onPlayPause={togglePlayPause}
                    onDurationChange={handleDurationChange}
                    onFullscreen={toggleFullscreen}
                />
            </div>
        </div>
    );
}

export default TVSlideshow; 