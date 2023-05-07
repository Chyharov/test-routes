import s from './Footer.module.scss'
import { BsFillTelephoneFill, BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';
import { GoMail, GoLocation } from 'react-icons/go';

function Footer() {

  return (
    <footer className={s.footer}>
      <div className={'container ' + s.footer__container}>

        <ul className={s.footer__contactInfoList}>
          <li className={s.footer__contactInfoList_Item}><a className={s.footer__socailMediaList_ItemLink} href="https://goo.gl/maps/4AxEan24gGph7TED8" aria-label="Link for find location" target="_blank" rel="noopener noreferrer"><GoLocation aria-label="location logo" className={s.contactInfoList_ItemSVG}/>176, Antonovycha Street, Kyiv</a></li>
          <li className={s.footer__contactInfoList_Item}><a className={s.footer__socailMediaList_ItemLink} href="mailto:PizzaStyle@gmail.com" aria-label="Link for email"><GoMail aria-label="email logo" className={s.contactInfoList_ItemSVG}/>PizzaStyle@gmail.com</a></li>
          <li className={s.footer__contactInfoList_Item}><a className={s.footer__socailMediaList_ItemLink} href="tel:+380631234567" aria-label="Link for call"><BsFillTelephoneFill aria-label="call logo" className={s.contactInfoList_ItemSVG}/>+38 063 123 45 67</a></li>
        </ul>


        <ul className={s.footer__socailMediaList}>
          <li className={s.footer__socailMediaList_Item}><a href="https://www.facebook.com/" aria-label="Link to Facebook" target="_blank" rel="noopener noreferrer nofollow"><BsFacebook aria-label="Facebook logo" className={s.footer__socailMediaList_ItemSVG}/></a></li>
          <li className={s.footer__socailMediaList_Item}><a href="https://www.instagram.com/" aria-label="Link to Instagram" target="_blank" rel="noopener noreferrer nofollow"><BsInstagram aria-label="Instagram logo" className={s.footer__socailMediaList_ItemSVG}/></a></li>
          <li className={s.footer__socailMediaList_Item}><a href="https://twitter.com/" aria-label="Link to Twitter" target="_blank" rel="noopener noreferrer nofollow"><BsTwitter aria-label="Twitter logo" className={s.footer__socailMediaList_ItemSVG}/></a></li>
          <li className={s.footer__socailMediaList_Item}><a href="https://www.linkedin.com/" aria-label="Link to LinkedIn" target="_blank" rel="noopener noreferrer nofollow"><BsLinkedin aria-label="LinkedIn logo" className={s.footer__socailMediaList_ItemSVG}/></a></li>
        </ul>
        
      </div>
    </footer>
    
  );
}

export default Footer;