import clsx from 'clsx';
import s from './Navigation.module.css';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
  const changeClassLink = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  return (
    <div className={s.wraperNav}>
      <Link to='/'>
        <h2 className={s.navTitle}>
          Good <span>Cinema</span>
        </h2>
      </Link>
      <nav className={s.nav}>
        <NavLink to='/' className={changeClassLink}>
          Home
        </NavLink>
        <NavLink to='/movie' className={changeClassLink}>
          Movies
        </NavLink>
      </nav>
    </div>
  );
};
export default Navigation;
