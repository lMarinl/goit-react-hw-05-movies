// import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Layout.module.css';

export const Layout = ({ children }) => {
  return (
    <>
      <header className={css.header}>
        <nav className={css.headerNav}>
          <NavLink
            className={({ isActive }) =>
              `${css.navLink} ${isActive ? css.active : ''}`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${css.navLink} ${isActive ? css.active : ''}`
            }
            to="/movies"
          >
            Movies
          </NavLink>
        </nav>
      </header>
      <main className={css.container}>{children}</main>
      <footer className={css.footer}></footer>
    </>
  );
};
