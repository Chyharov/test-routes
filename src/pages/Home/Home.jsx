import { Link } from 'react-router-dom';
import s from './Home.module.scss'


const Home = () => {
  
  return (
    <div className={'container ' + s.home__container}>
      <h1 className={s.home}>Welcome to PizzaStyle<button type='button' className={s.home__btn}><Link to="/pizza">Enjoy Pizza</Link></button></h1>
      
    </div>
  );
};

export default Home;