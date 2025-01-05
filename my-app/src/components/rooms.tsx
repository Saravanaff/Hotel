import React, { useState, useEffect } from "react";
import "./rooms.css";
import ocean from "../assets/images/ocean.jpg";
import poolside from "../assets/images/poolside.jpg";
import third from "../assets/images/third.jpg";

const Room = () => {
    const [details, setDetails] = useState([
        {
            id: 1,
            img: ocean,
            name: "Ocean Vista Suites",
            det: `Experience the enchantment of the Ocean Vista Suites, where each morning greets you with a breathtaking sunrise from your private balcony, overlooking the serene ocean.`,
        },
        {
            id: 2,
            img: poolside,
            name: "Poolside Bliss Rooms",
            det: `Dive into luxury with our Poolside Bliss Rooms, offering direct access to the swimming pool and beach, complemented by stunning sunrise views from your room.`,
        },
        {
            id: 3,
            img: third,
            name: "Skyline Elite Suites",
            det: `Enjoy unmatched views of the city skyline with Skyline Elite Suites, featuring premium amenities and spacious interiors.`,
        },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleNext = () => {
        setDetails((prevDetails) => {
            const newDetails = [...prevDetails];
            const firstItem = newDetails.shift();
            if (firstItem) {
                newDetails.push(firstItem);
            }
            return newDetails;
        });
    };

    const handlePrev = () => {
        setDetails((prevDetails) => {
            const newDetails = [...prevDetails];
            const lastItem = newDetails.pop();
            if (lastItem) {
                newDetails.unshift(lastItem);
            }
            return newDetails;
        });
    };

    return (
        <div className="second">
            <h1 className="second-heading">Our Rooms</h1>
            <div className="card-container">
                {details.map((e, index) => (
                    <div
                        className={`card ${
                            index === 1 ? "active-card" : ""
                        }`}
                        key={e.id}
                        style={{ backgroundImage: `url(${e.img})` }}
                    >
                        {index === 1 && (
                            <div className="content">
                                <h1>{e.name}</h1>
                                <p>{e.det}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <button className="arrow left" onClick={handlePrev}>
                &lt;
            </button>
            <button className="arrow right" onClick={handleNext}>
                &gt;
            </button>
        </div>
    );
};

export default Room;
