import React from 'react';

function DecorativeElements() {
    return (
        <>
            <img 
                src="images/animated-hummingbird-image-0031.gif" 
                alt="Decorative Hummingbird" 
                className="animated-bird position-1"
            />
            <img 
                src="images/animated-hummingbird-image-0022.gif" 
                alt="Decorative Hummingbird" 
                className="animated-bird position-2"
            />
            <img 
                src="images/animated-hummingbird-image-0024.gif" 
                alt="Decorative Hummingbird" 
                className="animated-bird position-3"
            />
            <div className="decorative-hummingbird left"></div>
            <div className="decorative-hummingbird right"></div>
            <div className="decorative-flower top-left"></div>
            <div className="decorative-flower bottom-right"></div>
            <div className="decorative-hummingbird tv-top-left"></div>
            <div className="decorative-hummingbird tv-top-right"></div>
            <div className="decorative-hummingbird tv-bottom-left"></div>
            <div className="decorative-hummingbird tv-bottom-right"></div>
        </>
    );
}

export default DecorativeElements; 