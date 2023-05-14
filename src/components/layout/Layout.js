import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <ul className={css.header__navigation}>
          <li>
            <NavLink className={css.header__link} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={css.header__link} to="/movies">
              Movies
            </NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Suspense fallback={<div>Loadind...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
export default Layout;
