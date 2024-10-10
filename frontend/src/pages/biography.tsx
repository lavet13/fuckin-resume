import { ScrollArea } from '@radix-ui/react-scroll-area';
import { FC } from 'react';

const BiographyPage: FC = () => {
  return (
    <div className='container xl:max-w-screen-xl flex-grow'>
      <div className='relative py-6 lg:gap-10 lg:py-8 lg:grid lg:grid-cols-[1fr_400px]'>
        <div className='mx-auto w-full min-w-0'>
          <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
            Биография
          </h1>
          <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
            Личностное становление
          </h2>
          <p className={`leading-7 [&:not(:first-child)]:mt-6`}>
            Родился... Родители... Близкие люди и обстоятельства, повлиявшие на
            личностное становление... В детстве... Особые таланты... Мечты...
            Стремления... Увлечения... Самые яркие воспоминания... Успехи...
            Достижения... О своей школе, ее лучших учителях и выпускниках (в том
            числе о магистрах ДонНТУ со ссылками на их сайты)...
          </p>
          <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
            Профессиональное становление
          </h2>
          <p className={`leading-7 [&:not(:first-child)]:mt-6`}>
            Формирование профессиональных предпочтений в детстве и школе... Роль
            родителей, учителей и наставников в профессиональной ориентации...
            Что определило выбор вуза и направления обучения... Профессиональное
            становление в период обучения в университете... Преподаватели и
            университетские курсы, наиболее способствовавшие профессиональному
            становлению... Мотивация поступления в магистратуру, выбора темы и
            научного руководителя... Особые профессиональные успехи и
            достижения... Увлечения и успехи, в разной степени способствующие
            профессиональному росту
          </p>
          <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
            Цели, планы и видение будущего
          </h2>
          <p className={`leading-7 [&:not(:first-child)]:mt-6`}>
            Ближние (на ближайшие годы) и дальние (на ближайшие десятилетия)
            цели... Профессиональные, творческие и, возможно, личные планы на
            будущее, направленные на достижение поставленных целей... Возможные
            пути реализации планов и достижения поставленных целей... Общее
            видение своего будущего и различные альтернативные сценарии
            собственного развития и профессиональной карьеры... Общее видение
            будущего развития своей профессии и области знаний... Наиболее
            предпочтительные сценарии будущего...
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

export default BiographyPage;
