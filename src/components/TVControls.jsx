import React from 'react';

function TVControls({
    isPlaying,
    duration,
    isFullscreen,
    onPrevious,
    onNext,
    onPlayPause,
    onDurationChange,
    onFullscreen
}) {
    return (
        <div className={`tv-controls ${isFullscreen ? 'fullscreen' : ''}`}>
            <div className="tv-button prev" title="Previous Image" onClick={onPrevious}></div>
            <div 
                className={`tv-button play-pause ${!isPlaying ? 'paused' : ''}`} 
                title="Play/Pause Slideshow"
                onClick={onPlayPause}
            ></div>
            <div className="tv-button next" title="Next Image" onClick={onNext}></div>
            <div 
                className="tv-button duration" 
                title="Change Slideshow Duration"
                onClick={onDurationChange}
            >
                {duration}
            </div>
            <div 
                className={`tv-button fullscreen ${isFullscreen ? 'active' : ''}`}
                title="Toggle Fullscreen"
                onClick={onFullscreen}
            ></div>
            <div className="tv-indicator"></div>
        </div>
    );
}

export default TVControls; 