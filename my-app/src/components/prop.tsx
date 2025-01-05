import { useParams } from "react-router-dom";
import { useState } from "react";
import classic from '../assets/images/classic.jpg';
import supera from '../assets/images/super.jpg';
import deluxe from '../assets/images/deluze.jpg';
import ocean from "../assets/images/ocean.jpg";
import poolside from "../assets/images/poolside.jpg";
import third from "../assets/images/third.jpg";
import { Link } from "react-router-dom";
import HotelIcon from '@mui/icons-material/Hotel';
import PeopleIcon from '@mui/icons-material/People';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import AirIcon from '@mui/icons-material/Air';
import WifiIcon from '@mui/icons-material/Wifi';
import './prop.css';
import { useEffect } from "react";
import { Box, Modal } from "@mui/material";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    p: 4,
  };

const Prop=()=>{
    const {id}=useParams<{id:string}>();
    const [isScrolled, setIsScrolled] = useState(false);
    
      useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 50) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
    const [open,setopen]=useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
    const [details] = useState([
        {
            id: 1,
            img: ocean,
            name: "Ocean Vista Suites",
            det:`The Ocean Vista Suites at Phoenix Beach Resort offer an unparalleled retreat into luxury and tranquility. Each suite is artfully designed to merge comfort with elegance, featuring expansive balconies that present a panoramic view of the ocean’s majesty. Awake each day to the soothing sounds of waves and the mesmerizing sight of the sunrise illuminating the horizon, promising a day of relaxation and serenity.`,
            det2:`These suites not only provide a stunning oceanic backdrop but also come equipped with modern amenities and plush furnishings to ensure your utmost comfort. Ideal for those seeking a peaceful escape, the Ocean Vista Suites promise a memorable stay filled with breathtaking views and unmatched luxury.`,
            sq:"220 sqf",
            rate:4500
        },
        {
            id: 2,
            img: poolside,
            name: "Poolside Bliss Rooms",
            det:`The Ocean Vista Suites at Phoenix Beach Resort offer an unparalleled retreat into luxury and tranquility. Each suite is artfully designed to merge comfort with elegance, featuring expansive balconies that present a panoramic view of the ocean’s majesty. Awake each day to the soothing sounds of waves and the mesmerizing sight of the sunrise illuminating the horizon, promising a day of relaxation and serenity.`,
            det2:`These suites not only provide a stunning oceanic backdrop but also come equipped with modern amenities and plush furnishings to ensure your utmost comfort. Ideal for those seeking a peaceful escape, the Ocean Vista Suites promise a memorable stay filled with breathtaking views and unmatched luxury.`,
            rate:3500,
            sq:"224 sqf"
        },
        {
            id: 3,
            img: third,
            name: "Skyline Elite Suites",
            det:`The Ocean Vista Suites at Phoenix Beach Resort offer an unparalleled retreat into luxury and tranquility. Each suite is artfully designed to merge comfort with elegance, featuring expansive balconies that present a panoramic view of the ocean’s majesty. Awake each day to the soothing sounds of waves and the mesmerizing sight of the sunrise illuminating the horizon, promising a day of relaxation and serenity.`,
            det2:`These suites not only provide a stunning oceanic backdrop but also come equipped with modern amenities and plush furnishings to ensure your utmost comfort. Ideal for those seeking a peaceful escape, the Ocean Vista Suites promise a memorable stay filled with breathtaking views and unmatched luxury.`,
            rate:3200,
            sq:"180 sqf"
        },
        {
            id: 4,
            img: deluxe,
            name: "Super Deluxe",
            det:`The Ocean Vista Suites at Phoenix Beach Resort offer an unparalleled retreat into luxury and tranquility. Each suite is artfully designed to merge comfort with elegance, featuring expansive balconies that present a panoramic view of the ocean’s majesty. Awake each day to the soothing sounds of waves and the mesmerizing sight of the sunrise illuminating the horizon, promising a day of relaxation and serenity.`,
            det2:`These suites not only provide a stunning oceanic backdrop but also come equipped with modern amenities and plush furnishings to ensure your utmost comfort. Ideal for those seeking a peaceful escape, the Ocean Vista Suites promise a memorable stay filled with breathtaking views and unmatched luxury.`,
            rate:4500,
            sq:"224 sqf"
        },
        {
            id: 5,
            img: supera,
            name: "Deluxe Rooms",
            rate:3500,
            det:`The Ocean Vista Suites at Phoenix Beach Resort offer an unparalleled retreat into luxury and tranquility. Each suite is artfully designed to merge comfort with elegance, featuring expansive balconies that present a panoramic view of the ocean’s majesty. Awake each day to the soothing sounds of waves and the mesmerizing sight of the sunrise illuminating the horizon, promising a day of relaxation and serenity.`,
            det2:`These suites not only provide a stunning oceanic backdrop but also come equipped with modern amenities and plush furnishings to ensure your utmost comfort. Ideal for those seeking a peaceful escape, the Ocean Vista Suites promise a memorable stay filled with breathtaking views and unmatched luxury.`,
            sq:"224 sqf"
 },
        {
            id: 6,
            img: classic,
            name: "Classic Rooms",
            det:`The Ocean Vista Suites at Phoenix Beach Resort offer an unparalleled retreat into luxury and tranquility. Each suite is artfully designed to merge comfort with elegance, featuring expansive balconies that present a panoramic view of the ocean’s majesty. Awake each day to the soothing sounds of waves and the mesmerizing sight of the sunrise illuminating the horizon, promising a day of relaxation and serenity.`,
            det2:`These suites not only provide a stunning oceanic backdrop but also come equipped with modern amenities and plush furnishings to ensure your utmost comfort. Ideal for those seeking a peaceful escape, the Ocean Vista Suites promise a memorable stay filled with breathtaking views and unmatched luxury.`,
            rate:3200,
            sq:"200 sqf"
        },
    ]);
    const room = details.find((room) => room.id === parseInt(id || '', 10));

    if (!room) {
        return <h1>Room Not Found</h1>;
    }

    return(
        <div className="room-details">
            <h1 className="room-heading">{room.name}<br></br><h3 id="one">5.0</h3>{" "}<h3 id="two">1000+ ratings</h3></h1>
            <div className="rate"><h3>From</h3><br></br><h2>&#8377;{room.rate}/ Night</h2></div>
            <div className="room-box">
                <div className="room-content">
                    <p>{room.det}</p>
                    <br></br>
                    <p>{room.det2}</p>

                </div>
                <div className="image-box">
                    <div className="room-image" style={{backgroundImage:`url(${room.img})`}}></div>
                    <a href="#" onClick={(e)=>{e.preventDefault();
                        setopen(true)}}>Book Now</a>
                </div>
            </div>
            <div className={`feature ${isScrolled?"features":""}`}>
                <div className="feature-item">
                    <h2><HotelIcon /> No. of Beds </h2> : <p>King Size Bed</p>
                </div>
                <div className="feature-item">
                    <h2><PeopleIcon />No. of People </h2> : <p>3 People</p>
                </div>
                <div className="feature-item">
                    <h2><AspectRatioIcon /> Room Size </h2> : <p>{room.sq}</p>
                </div>
                <div className="feature-item">
                    <h2><AirIcon /> AC / Non AC </h2>: <p>Split AC</p>
                </div>

                <div className="feature-item">
                    <h2><WifiIcon></WifiIcon> Wifi </h2> : <p> Available</p>
                </div>
            </div>
            <Modal
                open={open}
                onClose={()=>{setopen(false)}}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                <div className="form-container" style={{backgroundColor:"rgba(0,0,0)"}}>
                    <form className="form">
                        <h1 style={{textAlign:"center",color:"white",fontSize:"2.5rem",fontFamily:"oswald",margin:"2vh"}}>Room Booking</h1>
                        <DatePicker
                            selected={selectedDate}
                            onChange={handleDateChange}
                            dateFormat="dd-MM-yyyy" // You can change the date format here
                            placeholderText="Enter Check-in Date" // Placeholder for the input field
                            required
                            className="date-input" // Add custom styles if needed
                        />
                        <DatePicker
                            selected={selectedDate}
                            onChange={handleDateChange}
                            dateFormat="dd-MM-yyyy" // You can change the date format here
                            placeholderText="Enter Check-out Date" // Placeholder for the input field
                            required
                            className="date-input" // Add custom styles if needed
                        />
                        <input type="number" placeholder="No.of Rooms" required></input>
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <input type="tel" placeholder="Your Phone" required />
                        <textarea placeholder="Your Message" rows={5} required></textarea>
                        <button type="submit">Request Booking</button>
                    </form>
                </div>
                    
                </Box>
            </Modal>

        </div>
    );
    
}

export default Prop;