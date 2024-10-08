import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row md:h-24">
        <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
          Footer
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
