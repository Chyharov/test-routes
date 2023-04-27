import { Link } from 'react-router-dom';
import s from './Header.module.scss'
import Logo from '../Logo/Logo'
import { BsCartFill } from "react-icons/bs";


function Header({cartItemCount}) {

  return (
    <header className={s.header}>
      <div className={'container ' + s.header__container}>
        <nav>
          <ul className={s.navList}>
            <li className={s.navList__item}><Link to="/pizza"><Logo/></Link></li>
            <li className={s.navList__itemCart}><Link to="/cart">{cartItemCount}<BsCartFill className={s.cartLogo}/></Link></li>
          </ul>
        </nav>
      </div>
    </header>
    
  );
}

export default Header;