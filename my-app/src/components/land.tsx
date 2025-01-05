import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './land.css';
import { gsap } from 'gsap'; // Import GSAP

const Land: React.FC = () => {
    const textRef = useRef<HTMLDivElement | null>(null); // Reference for text container


    useEffect(() => {
        if (textRef.current) {
            const letters = textRef.current.querySelectorAll('.bounce-text span');

            gsap.fromTo(
                letters, 
                { y: 0, opacity: 0 }, 
                {
                    y: -10, // Bounce distance (up)
                    opacity: 1, // Fade in effect
                    stagger: 0.05, // Slight delay for staggered bounce
                    duration: 0.5, // Duration for one jump
                    ease: 'bounce.out', // Bouncy easing for the animation
                    repeat: 0, // Ensure no repeating animation
                    yoyo: true, // Ensures the bounce comes down after going up
                });
        }
    }, []);

    return (
        <div className="first">

            <div className="first-body">
                <p>WELCOME TO PHOENIX HOTEL</p>
                <div className="bounce-text" ref={textRef}>
                    <h1>
                        {['Feel', 'the', 'Comfort'].map((word, index) => (
                            <span key={index} style={{ marginRight: '10px' }}>
                                {word.split('').map((char, idx) => (
                                    <span key={idx}>{char}</span>
                                ))}
                            </span>
                        ))}
                    </h1>
                    <h1>
                        {['Enjoy', 'the', 'Adventure'].map((word, index) => (
                            <span key={index} style={{ marginRight: '10px' }}>
                                {word.split('').map((char, idx) => (
                                    <span key={idx}>{char}</span>
                                ))}
                            </span>
                        ))}
                    </h1>
                </div>
                <Link to="#">Explore Now</Link>
            </div>
        </div>
    );
};

export default Land;
