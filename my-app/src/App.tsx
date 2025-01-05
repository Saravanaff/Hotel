import React, { useState } from 'react';
import './App.css';
import Land from './components/land';
import Room from './components/rooms';
import HomeIcon from '@mui/icons-material/Home';
import Explore from './components/explore';
import NextRoom from './components/nextroom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CloseIcon from '@mui/icons-material/Close';
import About from './components/about';
import Prop from './components/prop';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Loader from './Loader';
import Contact from './components/contact';
import Foot from './components/foot';

const App: React.FC = () => {
    const [isSidebarVisible, setSidebarVisible] = useState(false);
    const [loading, setLoading] = useState(false);


    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };
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


    useEffect(() => {
        setLoading(true);
        const timeout = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timeout); 
    }, []);
    
    return (
        <Router>
            <div className="app-container">
                {loading && <Loader />}
                {/* Navbar */}
                <div  className={`nav ${isScrolled?"blur":""}`}>
                    <div className="icon" onClick={toggleSidebar}>
                        {isSidebarVisible ? <CloseIcon /> : <DensityMediumIcon />}
                    </div>

                    <div className={`navbar-center ${isSidebarVisible ? 'show' : ''}`}>
                        <Link to="/" onClick={toggleSidebar}>Home</Link>
                        <Link to="/rooms" onClick={toggleSidebar}>Rooms</Link>
                        <Link to="/about" onClick={toggleSidebar}>About Us</Link>
                        <Link to="/contact" onClick={toggleSidebar}>Contact</Link>
                    </div>

                    <div className="nav-right">
                        <Link to="#">
                            <InstagramIcon />
                        </Link>
                        <Link to="#">
                            <FacebookIcon />
                        </Link>
                    </div>
                </div>
                <a href="#na" className={`nav-icon ${!isScrolled?"normal":""}`} onClick={(e) => {e.preventDefault(); // Prevent default anchor behavior
                    document.getElementById("na")?.scrollIntoView({
                    behavior: "smooth",
                });
                }}>
                    <HomeIcon className="Home"></HomeIcon>
                </a>

                {/* Routes */}
                <Routes>
                    {/* Root Route: Show Land, Room, and Explore components */}
                    <Route
                        path="/"
                        element={
                            <>
                                <Land />
                                <Room />
                                <Explore />
                                <Foot/>
                            </>
                        }
                    />
                    {/* Rooms Route: Show NextRoom component */}
                    <Route path="/rooms" element={<><NextRoom /><Foot/></>} />
                    <Route path="/rooms/:id" element={<><Prop/><Foot/></>} />
                    <Route path="/contact" element={<><Contact/><Foot/></>}/>
                    <Route path='/about' element={<><About/><Foot/></>}></Route>
                    {/* Fallback Route */}
                    <Route path="*" element={<h1>Page Not Found</h1>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
