import { NavLink } from 'react-router-dom';
import s from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={s.infoWraper}>
      <h2 className={s.title}>Sorry, no such page exists</h2>
      <NavLink className={s.linkHome} to='/'>
        Home
      </NavLink>
    </div>
  );
};
export default NotFoundPage;
