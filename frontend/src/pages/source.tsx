import { ScrollArea } from '@radix-ui/react-scroll-area';
import { FC } from 'react';

const Source: FC = () => {
  return (
    <div className='container xl:max-w-screen-xl flex-grow'>
      <div className='relative py-6 lg:gap-10 lg:py-8 lg:grid lg:grid-cols-[1fr_400px]'>
        <div className='mx-auto w-full min-w-0'>
          <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
            Ссылки по теме выпускной работы
          </h1>
          <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
            Материалы магистров ДонНТУ
          </h2>

          <div className={'[&:not(:first-child)]:mt-8 pl-2'}>
            <a
              href='#'
              rel='noreferrer'
              className={
                'break-words inline-flex font-medium text-primary hover:decoration-2 underline underline-offset-4 leading-5'
              }
            >
              1. Татолов Е.Р. Разработка и исследование подхода к унификации
              синтеза автоматов Мура в базисе FPGA
            </a>
            <p className={'leading-7 [&:not(:first-child)]:mt-3'}>
              <span className='font-bold'>Описание:</span> Персональный сайт на
              портале магистров ДонНТУ, 2011 г.
            </p>
            <p className={'leading-7 [&:not(:first-child)]:mt-3'}>
              <span className='font-bold'>Руководитель:</span> к.т.н. Зеленева
              И.Я.
            </p>
          </div>

          {/* След. статьи...  */}
          <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
            Научные работы и статьи
          </h2>
          <div className={'[&:not(:first-child)]:mt-6 pl-2'}>
            <a
              href='#'
              rel='noreferrer'
              className={
                'break-words inline-flex font-medium text-primary hover:decoration-2 underline underline-offset-4 leading-5'
              }
            >
              KISS: a program for optimal state assignment of finite state
              machines
            </a>
            <p className={'leading-7 [&:not(:first-child)]:mt-3'}>
              <span className='font-bold'>Авторы:</span> De Micheli G., Brayton
              R., Sangiovanni-Vincentelli A.
            </p>
            <p className={'leading-7 [&:not(:first-child)]:mt-3'}>
              <span className='font-bold'>Описание:</span> Программная
              реализация алгоритма KISS кодирования состояний конечных автоматов{' '}
            </p>
          </div>

          <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
            Техническая и справочная литература
          </h2>
          <div className={'[&:not(:first-child)]:mt-6 pl-2'}>
            <a
              href='#'
              rel='noreferrer'
              className={
                'break-words inline-flex font-medium text-primary hover:decoration-2 underline underline-offset-4 leading-5'
              }
            >
              Национальная библиотека Украины имени В.И. Вернадского
            </a>
            <p className={'leading-7 [&:not(:first-child)]:mt-3'}>
              Крупнейшая библиотека Украины, главный научно-информационный центр
              государства. Входит в число десяти крупнейших национальных
              библиотек мира.
            </p>
          </div>

          <div className={'[&:not(:first-child)]:mt-6 pl-2'}>
            <a
              href='#'
              rel='noreferrer'
              className={
                'break-words inline-flex font-medium text-primary hover:decoration-2 underline underline-offset-4 leading-5'
              }
            >
              Название
            </a>
            <p className={'leading-7 [&:not(:first-child)]:mt-3'}>
              Текст c описанием источника
            </p>
          </div>
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

export default Source;
