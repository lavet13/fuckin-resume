import { ScrollArea } from '@radix-ui/react-scroll-area';
import { FC } from 'react';

const LibPage: FC = () => {
  return (
    <div className='container xl:max-w-screen-xl flex-grow'>
      <div className='relative py-6 lg:gap-10 lg:py-8 lg:grid lg:grid-cols-[1fr_400px]'>
        <div className='mx-auto w-full min-w-0'>
          <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
            Библиотека материалов по теме выпускной работы
          </h1>
          <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
            Собственные публикации и доклады
          </h2>

          <div className={'[&:not(:first-child)]:mt-8 pl-2'}>
            <a
              href='#'
              rel='noreferrer'
              className={
                'break-words inline-flex font-medium text-primary hover:decoration-2 underline underline-offset-4 leading-5'
              }
            >
              1. Исследование автоколебаний при моделировании гармонического
              осциллятора с использованием комплексов моделирования
            </a>
            <p className={'leading-7 [&:not(:first-child)]:mt-3'}>
              <span className='font-bold'>Авторы:</span> В.Л. Максименко, А.Ю.
              Иванов
            </p>
            <p className={'leading-7 [&:not(:first-child)]:mt-3'}>
              <span className='font-bold'>Описание:</span> В данной работе в
              системах Simulink и МВТУ было промоделировано уравнение Ван дер
              Поля с затухающей амплитудой. Выполнены сравнительные
              характеристики систем моделирования Simulink и МВТУ. Все
              промоделированные уравнения имеют временные графики.
            </p>
            <p className={'leading-7 [&:not(:first-child)]:mt-3'}>
              <span className='font-bold'>Источник:</span> Інформаційні
              управляючі системи та комп’ютерний моніторинг (ІУС-2011) /
              Матерiали II мiжнародної науково-технiчної конференцiї студентiв,
              аспiрантiв та молодих вчених. — Донецьк, ДонНТУ — 2011, Том 2, с.
              132-136.
            </p>
          </div>

          {/* След. статьи...  */}

          <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
            Тематические статьи
          </h2>
          <div className={'[&:not(:first-child)]:mt-6 pl-2'}>
            <a
              href='#'
              rel='noreferrer'
              className={
                'break-words inline-flex font-medium text-primary hover:decoration-2 underline underline-offset-4 leading-5'
              }
            >
              A fast state reduction algorithm for incompletely specified finite
              state machines
            </a>
            <p className={'leading-7 [&:not(:first-child)]:mt-3'}>
              <span className='font-bold'>Авторы:</span> H. Higuchi, Y.
              Matsunaga
            </p>
            <p className={'leading-7 [&:not(:first-child)]:mt-3'}>
              <span className='font-bold'>Описание:</span>Рассмотрен алгоритм
              минимизации состояний частичных конечных автоматов SLIM
              (SequentiaL machIne Minimizer). Приведены результаты
              экспериментального анализа и сравнительные характеристики.
              Показано, что алгоритм SLIM обладает значительной скоростью работы
              и эффективными минимизирующими свойствами.
            </p>
            <p className={'leading-7 [&:not(:first-child)]:mt-3'}>
              <span className='font-bold'>Источник:</span> Higuchi H. A fast
              state reduction algorithm for incompletely specified finite state
              machines / H. Higuchi, Y. Matsunaga // 33rd Annual Conference of
              Design Automation. – Las Vegas, 1996. – pp. 463-466.,{' '}
              <a
                href='#'
                rel='noreferrer'
                className={
                  'break-words inline-flex font-medium text-primary hover:decoration-2 underline underline-offset-4 leading-5'
                }
              >
                http://www.cs.york.ac.uk
              </a>
            </p>
          </div>

          <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
            Переводы статей
          </h2>
          <div className={'[&:not(:first-child)]:mt-6 pl-2'}>
            <a
              href='#'
              rel='noreferrer'
              className={
                'break-words inline-flex font-medium text-primary hover:decoration-2 underline underline-offset-4 leading-5'
              }
            >
              Название переведенной статьи
            </a>
            <p className={'leading-7 [&:not(:first-child)]:mt-3'}>
              <span className='font-bold'>Авторы:</span> И.О. Фамилия 1, И.О.
              Фамилия 2, И.О. Фамилия N
            </p>
            <p className={'leading-7 [&:not(:first-child)]:mt-3'}>
              <span className='font-bold'>Описание:</span> Описание переведенной
              статьи
            </p>
            <p className={'leading-7 [&:not(:first-child)]:mt-3'}>
              <span className='font-bold'>Источник(англ):</span> Источник
              оригинальной статьи{' '}
              <a
                href='#'
                rel='noreferrer'
                className={
                  'break-words inline-flex font-medium text-primary hover:decoration-2 underline underline-offset-4 leading-5'
                }
              >
                Ссылка на источник
              </a>
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

export default LibPage;
