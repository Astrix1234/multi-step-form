import React from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div
      style={{
        maxWidth: 940,
        height: 600,
        margin: '0 auto',
        display: 'flex',
        backgroundColor: '#EFF5FF',
        borderRadius: 15,
        boxShadow: '0px 25px 40px -20px rgba(0, 0, 0, 0.10)',
        marginTop: 100,
      }}
    >
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
