import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './nextroom.css';
import ocean from "../assets/images/ocean.jpg";
import poolside from "../assets/images/poolside.jpg";
import third from "../assets/images/third.jpg";
import classic from '../assets/images/classic2j.jpg';
import supera from '../assets/images/super2j.jpg';
import deluxe from '../assets/images/deluxe2j.jpg';

const Nextroom = () => {
    const [details] = useState([
        { id: 1, img: ocean, name: "Ocean Vista Suites", det: `Experience the enchantment of the Ocean Vista Suites, where each morning greets you with a breathtaking sunrise from your private balcony, overlooking the serene ocean.` },
        { id: 2, img: poolside, name: "Poolside Rooms", det: `Dive into luxury with our Poolside Bliss Rooms, offering direct access to the swimming pool and beach, complemented by stunning sunrise views from your room.` },
        { id: 3, img: third, name: "Skyline Elite Suites", det: `Enjoy unmatched views of the city skyline with Skyline Elite Suites, featuring premium amenities and spacious interiors.` },
        { id: 4, img: deluxe, name: "Super Deluxe", det: `Experience ultimate luxury in our Executive Rooms, the pinnacle of comfort at Phoenix Beach Resort, with exclusive amenities and unparalleled service.` },
        { id: 5, img: supera, name: "Deluxe Rooms", det: `Elevate your stay in our Deluxe Rooms, offering enhanced comfort with additional amenities and pool access for a truly relaxing experience.` },
        { id: 6, img: classic, name: "Classic Rooms", det: `Relax in our Classic Rooms with garden views, offering all essential amenities for comfort, including air conditioning and a king-size bed.` },
    ]);

    const itemsRef = useRef<(HTMLDivElement | null)[]>([]); // Allow null in the type

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target); // Stop observing once visible
                    }
                });
            },
            { threshold: 0.3 }
        );

        itemsRef.current.forEach((item) => {
            if (item) observer.observe(item);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="fourth">
            <h1 className="fourth-heading">Rooms</h1>
            <div className="fourth-container">
                {details.map((e, index) => (
                    <div
                        className="fourth-item"
                        key={e.id}
                        ref={(el) => {
                            itemsRef.current[index] = el; // Assign ref or null
                        }}
                    >
                        <div className="fourth-top" style={{ backgroundImage: `url(${e.img})` }}></div>
                        <div className="fourth-content">
                            <h1>{e.name}</h1>
                            <p>{e.det}</p>
                            <Link to={`/rooms/${e.id}`} className="book">
                                Book Now
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Nextroom;
