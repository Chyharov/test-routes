import { Link } from 'react-router-dom';
import s from './Home.module.scss'


const Home = () => {
  
  return (
    <section className={s.section__homePage}>
    <div className={'container ' + s.home__container}>
      <h1 className={s.home}>Welcome to PizzaStyle </h1>
      <Link className={s.button} to="/">Enjoy Pizza</Link>
      </div>
    </section>
  );
};

export default Home;