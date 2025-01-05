import hike from '../assets/images/hike.jpg';
import './about.css';

function About() {
    return (
        <div className="about">
            <h1 className="about-heading">About Us</h1>
            <p>
                <h1 className='ab'>About Phoenix Beach Resort</h1>
                Phoenix Beach Resort, nestled on the picturesque shores of Kanyakumari, offers an idyllic escape where the azure waters meet golden sands. Our resort is a sanctuary of tranquility, designed to provide guests with a serene getaway amidst the beauty of nature. With a range of accommodations from garden view rooms to ocean vista suites, each stay is enhanced by personalized service, ensuring a memorable experience. Enjoy direct beach access, gourmet dining on request, and the warmth of our dedicated staff, making Phoenix Beach Resort the perfect retreat for relaxation and rejuvenation.
            </p>
            
            <p className='php'><h1 className='phoh'>Why Phoenix Beach Resort ?</h1>Phoenix Beach Resort boasts an array of features designed to provide guests with a luxurious and unforgettable stay! Phoenix Beach Resort offers a tranquil escape on the serene shores of Kanyakumari, combining luxury with nature's beauty. Enjoy direct beach access, personalized services, and stunning accommodations, from garden suites to ocean vistas. Located just 2.9 km from Kanyakumari, it’s perfect for relaxation and exploration. Experience unmatched hospitality and unforgettable memories with us!</p>
            <img src={hike} alt="Phoenix Beach Resort" />
            <div className="about-highlights">
                <div>
                    <b>Direct Beach Access:</b> Guests enjoy immediate access to pristine beaches, perfect for sunrise views, swimming, and relaxation right at their doorstep.
                </div>
                <div>
                    <b>Customized Dining Options:</b> Without an in-house kitchen, our unique service offers personalized meal procurement and delivery, catering to your dietary preferences and desires.
                </div>
                <div>
                    <b>Diverse Accommodations:</b> From the serene Garden Oasis Suites to the stunning Ocean Vista Suites, our rooms are designed to suit every taste, providing comfort and luxury.
                </div>
                <div>
                    <b>Proximity to Kanyakumari:</b> Just 2.9 km away from the vibrant cultural attractions of Kanyakumari, our resort is ideally situated for guests looking to explore local sights.
                </div>
                <div>
                    <b>Exceptional Service:</b> Our dedicated staff are committed to providing personalized, attentive service to ensure a memorable and comfortable stay for every guest.
                </div>
            </div>
        </div>
    );
}

export default About;
