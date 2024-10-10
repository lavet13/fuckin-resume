import { ScrollArea } from '@radix-ui/react-scroll-area';
import { FC } from 'react';

const Home: FC = () => {
  return (
    <div className='container xl:max-w-screen-xl flex-grow flex flex-col justify-center'>
      <div className='flex flex-col relative py-6 lg:gap-10 lg:py-8 lg:grid lg:grid-cols-[1fr_500px] h-[calc(100vh-3.5rem)] justify-center'>
        <div className='flex flex-col justify-center mx-auto w-full min-w-0'>
          <h1 className='scroll-m-20 text-4xl mb-3 font-extrabold tracking-tight lg:text-5xl'>
            Скиндер Павел Павлович
          </h1>
          <div className='pl-3 space-y-2'>
            <blockquote className="mt-6 border-l-2 pl-6">
            <h4 className='scroll-m-20 text-xl font-light tracking-tight'>
              Факультет компьютерных наук и технологий
            </h4>
            <h4 className='scroll-m-20 text-xl font-light tracking-tight'>
              Кафедра компьютерной инженерии
            </h4>
            <h4 className='scroll-m-20 text-xl font-light tracking-tight'>
              Специальность «Компьютерные системы и сети»
            </h4>
            </blockquote>
          </div>

            <h3 className="mt-8 mb-3 scroll-m-20 text-3xl font-black tracking-tight">
              Оптимизация аппаратурных затрат в логических схемах устройств
              управления
            </h3>
          <blockquote className="ml-3 mt-6 border-l-2 pl-6">
            <h4 className='scroll-m-20 text-xl font-light tracking-tight'>
              Научный руководитель: д.т.н., проф. Петров Петр Петрович
            </h4>
          </blockquote>
        </div>

        <div className='hidden text-sm lg:block'>
          <div className='sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] pt-4'>
            <ScrollArea className='relative overflow-hidden h-full pb-10'>
              <div className='flex justify-center items-center h-full'>
                <img
                  src='/images/chel.jpg'
                  className='aspect-[3/4] max-h-full w-auto object-cover grayscale rounded-md'
                />
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
