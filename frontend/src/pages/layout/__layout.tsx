import { FC } from 'react';
import Header from './__header';
import Footer from './__footer';
import { Outlet } from 'react-router-dom';

const Layout: FC = () => {
  return (
    <div className='relative flex flex-col'>
      <Header />
      <main className='flex flex-col grow shrink-0 border-b min-h-[calc(100vh-3.5rem)]'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
