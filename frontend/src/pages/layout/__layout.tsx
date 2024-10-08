import { FC } from 'react';
import Header from './__header';
import Footer from './__footer';
import { Outlet } from 'react-router-dom';

const Layout: FC = () => {
  return (
    <div className='relative flex flex-col justify-between min-h-screen'>
      <Header />
      <main className='flex flex-col flex-1 border-b'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
