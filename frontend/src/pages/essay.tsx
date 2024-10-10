import { ScrollArea } from '@radix-ui/react-scroll-area';
import { FC } from 'react';

const EssayPage: FC = () => {
  return (
    <div className='container xl:max-w-screen-xl flex-grow'>
      <div className='relative py-6 lg:gap-10 lg:py-8 lg:grid lg:grid-cols-[1fr_400px]'>
        <div className='mx-auto w-full min-w-0'>
          <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
            Реферат
          </h1>
          <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
            Реферат по теме выпускной работы
          </h2>
          <blockquote className='mt-6 border-l-2 pl-6 italic'>
            Данный реферат используется в качестве примера с разрешения его
            автора, магистра ДонНТУ Евгения Татолова. Оригинал:{' '}
            <a
              href='http://masters.donntu.ru/2011/fknt/tatolov/diss/'
              target='_blank'
              rel='noreferrer'
              className='break-words font-medium text-primary hover:decoration-2 underline underline-offset-4'
            >
              http://masters.donntu.ru/2011/fknt/tatolov/diss/
            </a>
          </blockquote>
          <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
            Содержание
          </h2>
          <nav className='flex flex-col gap-2 w-full pt-3 pl-2'>
            <a
              className='font-medium text-primary underline hover:decoration-2 underline-offset-4'
              href='#123'
            >
              Введение
            </a>
            <a
              className='font-medium text-primary underline hover:decoration-2 underline-offset-4'
              href='#123'
            >
              1. Актуальность темы
            </a>
            <a
              className='font-medium text-primary underline hover:decoration-2 underline-offset-4'
              href='#123'
            >
              2. Цель и задачи исследования, планируемые результаты
            </a>
            <a
              className='font-medium text-primary underline hover:decoration-2 underline-offset-4'
              href='#123'
            >
              3. Обзор исследований и разработок
            </a>
            <a
              className='pl-5 font-medium text-primary underline hover:decoration-2 underline-offset-4'
              href='#123'
            >
              3.1 Обзор международных источников
            </a>
            <a
              className='pl-5 font-medium text-primary underline hover:decoration-2 underline-offset-4'
              href='#123'
            >
              3.2 Обзор национальных источников
            </a>
            <a
              className='pl-5 font-medium text-primary underline hover:decoration-2 underline-offset-4'
              href='#123'
            >
              3.3 Обзор локальных источников
            </a>
            <a
              className='font-medium text-primary underline hover:decoration-2 underline-offset-4'
              href='#123'
            >
              4. Подход к унификации синтеза автоматов Мура в базисе FPGA
            </a>
            <a
              className='font-medium text-primary underline hover:decoration-2 underline-offset-4'
              href='#123'
            >
              Выводы
            </a>
            <a
              className='font-medium text-primary underline hover:decoration-2 underline-offset-4'
              href='#123'
            >
              Список источников
            </a>
          </nav>
          <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
            Введение
          </h2>
          <p className={`leading-7 [&:not(:first-child)]:mt-6`}>
            Бла бла бла...
          </p>
        </div>

        <div className='hidden text-sm xl:block'>
          <div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] pt-4">
            <ScrollArea className="relative overflow-hidden h-full pb-10">
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EssayPage;
