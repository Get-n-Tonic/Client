import './Footer.scss';

import facebookIcon from '../../assets/images/Facebook.svg';
import pinterestIcon from '../../assets/images/Pinterest.svg';
import instagramIcon from '../../assets/images/Instagram.svg';

function Footer() {

return (

<>
    <footer className='footer'>

        <h1 className='footer__logo'>Christmas Cocktail Creations &#x1F378;</h1>
        <div className='footer__container'>
            <div className='footer__social-media'>
                <img src={facebookIcon} />
                <img src={pinterestIcon}/>
                <img src={instagramIcon}/>
            </div>
            <p className='footer__catchphrase'>Mix, Sip, Celebrate!</p>
            <p className='footer__copyright'>© 2024 Cocktail Creations. All Rights Reserved.</p>
        </div>
       
        
        
    </footer>
   

</>

);


};

export default Footer;