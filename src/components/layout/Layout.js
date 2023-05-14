import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <>
      <header>
        <ul>
          <li>
            <NavLink to="/">Домашняя</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
        <main>
          <Suspense fallback={<div>Loadind...</div>}>
            <Outlet />
          </Suspense>
        </main>
      </header>
    </>
  );
};
export default Layout;
