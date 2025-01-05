import React, { useEffect, useRef } from 'react';
import thiru from '../assets/images/thiruvalluvar.jpg';
import falls from '../assets/images/falls.jpg';
import mathoor from '../assets/images/mathoor.jpg';
import palace from '../assets/images/palace.jpg';
import './explore.css';

const Explore = () => {
    const name = [
        { name: "Thiruvalluvar Statue", url: thiru,
          des:"The Thiruvalluvar Statue in Kanyakumari is a must-visit for its breathtaking location, surrounded by the confluence of three seas. Accessible by ferry, the towering 133-foot statue offers a serene spot for reflection and stunning ocean views. Don’t miss the nearby Vivekananda Rock Memorial to complete your experience!"
         },
        { name: "Thiruparappu Water Falls", url: falls,
          des:"Thiruparappu Falls in Kanyakumari is a picturesque destination where the Kodayar River cascades beautifully amidst lush greenery. Perfect for nature lovers, this serene spot also features a swimming area and a nearby ancient Mahadevar Temple. Plan a visit for a refreshing getaway and scenic photography opportunities!"
        },
        { name: "Mathoor Aqueduct", url: mathoor,
          des:"The Mathoor Aqueduct in Kanyakumari is an engineering marvel, spanning over a lush green valley to carry water across the Pahrali River. Surrounded by breathtaking scenery, it’s a perfect spot for nature walks, photography, and panoramic views. Climb to the top for a serene experience of this historic structure!"
         },
        { name: "Padmanabhapuram Palace", url: palace,
          des:"Padmanabhapuram Palace, located near Kanyakumari, is a stunning example of traditional Kerala architecture. This 16th-century wooden palace features intricate carvings, beautiful murals, and elegant interiors that reflect the region's rich history. A visit offers a glimpse into the royal heritage and artistry of a bygone era."
        }
    ];

    const carouselRef = useRef<HTMLDivElement | null>(null);
    const listRef = useRef<HTMLDivElement | null>(null);
    const runningTimeRef = useRef<HTMLDivElement | null>(null);

    const timeRunning = 3000;
    const timeAutoNext = 7000;

    useEffect(() => {
        const carousel = carouselRef.current!;
        const list = listRef.current!;
        const runningTime = runningTimeRef.current!;
        const nextBtn = carousel.querySelector('.next') as HTMLButtonElement;
        const prevBtn = carousel.querySelector('.prev') as HTMLButtonElement;

        let runTimeOut: NodeJS.Timeout;
        let runNextAuto: NodeJS.Timeout;

        const resetTimeAnimation = () => {
            runningTime.style.animation = 'none';
            void runningTime.offsetHeight; // Trigger reflow
            runningTime.style.animation = 'runningTime 7s linear 1 forwards';
        };

        const showSlider = (type: 'next' | 'prev') => {
            const sliderItemsDom = list.querySelectorAll('.third-item');
            if (type === 'next') {
                list.appendChild(sliderItemsDom[0]);
                carousel.classList.add('next');
            } else {
                list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
                carousel.classList.add('prev');
            }

            clearTimeout(runTimeOut);
            runTimeOut = setTimeout(() => {
                carousel.classList.remove('next');
                carousel.classList.remove('prev');
            }, timeRunning);

            clearTimeout(runNextAuto);
            runNextAuto = setTimeout(() => {
                nextBtn.click();
            }, timeAutoNext);

            resetTimeAnimation();
        };

        nextBtn.onclick = () => showSlider('next');
        prevBtn.onclick = () => showSlider('prev');

        runNextAuto = setTimeout(() => {
            nextBtn.click();
        }, timeAutoNext);

        resetTimeAnimation(); // Start the initial animation

        return () => {
            clearTimeout(runTimeOut);
            clearTimeout(runNextAuto);
            nextBtn.onclick = null;
            prevBtn.onclick = null;
        };
    }, []);

    return (
        <div className="third" ref={carouselRef}>
            <h1 className='third-head'>Exlore Nearby</h1>
            <div className="third-list" ref={listRef}>
                {name.map((e, index) => (
                    <div
                        key={index}
                        className="third-item"
                        style={{ backgroundImage: `url(${e.url})` }}
                    >
                        <h1 className="imagecon">{e.name}</h1>
                        <p className='imagep'>{e.des}</p>
                    </div>
                ))}
            </div>
            <div className="arrows">
                <button className="prev">{"<"}</button>
                <button className="next">{">"}</button>
            </div>
            <div className="runningTime" ref={runningTimeRef}></div>
        </div>
    );
};

export default Explore;
