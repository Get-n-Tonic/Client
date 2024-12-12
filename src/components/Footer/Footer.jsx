import './Footer.scss';

import facebookIcon from '../../assets/images/Facebook.svg';
import pinterestIcon from '../../assets/images/Pinterest.svg';
import instagramIcon from '../../assets/images/Instagram.svg';

function Footer() {

return (

<>
    <footer className='footer'>

        <h1 className='footer__logo'>Christmas Cocktail Creations</h1>
        <div className='footer__containter'>
            <div className='footer__social-media'>
                <img src={facebookIcon} />
                <img src={pinterestIcon}/>
                <img src={instagramIcon}/>
            </div>
            <p>Mix, Sip, Celebrate!</p>
        </div>
       
        
        <p>© 2024 Cocktail Creations. All Rights Reserved.</p>
    </footer>
   

</>

);


};

export default Footer;