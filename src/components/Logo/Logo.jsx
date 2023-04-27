import logo from '../../images/pizza-svgrepo-com.svg';
import s from './Logo.module.scss';

const Logo = () => {
  return (
    <div className={s.logo}>
        <img height="30px" width="30px" src={logo} alt="Pizza logo" />
        <p>PizzaStyle</p>
    </div>
  );
};

export default Logo;