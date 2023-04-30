import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import navbarIcons from '../json/navbarIcons.json';

export default function Layout() {
  const { pathname } = useLocation();
  return (
    <>
      <header>
        <Link
          to={'/'}
          style={{
            padding: '1em',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src={navbarIcons[0]['logo']} alt='logo' width={150} />
        </Link>
      </header>
      {pathname !== '/' && <Header />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
