import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import './foot.css';
function Foot(){
    return(
    <div className='footing'>
        <div className='contact-foot'>
            <div className='contact-left'>
                <div className='contact-item'>Contact</div>
                <div className='contact-item'>
                    <h2><HomeIcon></HomeIcon></h2><p>Opp. Old Light House,<br></br>
                    Leepuram, Kanyakumari.</p>
                </div> 
                <div className='contact-item'>
                    <h2><LocalPhoneIcon></LocalPhoneIcon></h2><p>+91 – 9345 111 818</p>
                </div>
                <div className='contact-item'>
                    <h2><EmailIcon></EmailIcon></h2><p>info@phoenixbeachresort.com <br></br>
                    www.phoenixbeachresort.com</p>
                </div>
            </div>
            <div className='contact-right'>
                <div className='contact-content'>
                    Our Timings
                </div>
                <div className='contact-content'>
                At <b>PHOENIX BEACH RESORT</b> Check-in is at 12 noon. Early check-in depends on availability and may include extra charges.
                </div>
                <div className='contact-content'>Available 24/7</div>

            </div>
        </div>
        <p id="footp">Copyright &copy; 2024 Phoenix Beach Resort. All Rights Reserved</p>
        <p id="footp2">Developed by Saravana</p>
    </div>
    )
}

export default Foot;