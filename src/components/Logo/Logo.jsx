import { IoPizza } from "react-icons/io5";
import s from './Logo.module.scss';

const Logo = () => {
  return (
    <div className={s.logo__Container}>
      <IoPizza className={s.logo__Header} />
        <p className={s.logo__description}>PizzaStyle</p>
    </div>
  );
};

export default Logo;