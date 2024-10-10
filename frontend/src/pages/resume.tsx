import { FC } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ScrollArea } from '@radix-ui/react-scroll-area';

const faqData = [
  { question: 'Как меня зовут?', answer: 'Иванов Иван Иванович' },
  { question: 'Когда я родился?', answer: '01.01.1991 г.' },
  { question: 'Откуда я родом?', answer: 'Донецк' },
  { question: 'Где я учился в школе?', answer: 'Перечень школ, в которых пришлось обучаться, желательно с указанием классов и годов обучения' },
  { question: 'Какой у меня был средний балл в бакалавриате?', answer: 'Средний балл за время обучения: 4.5' },
  { question: 'Какими языками я владею?', answer: 'Русский (в совершенстве), Английский (средний уровень)' },
  { question: 'Мои достижения?', answer: 'Победитель всеукраинских олимпиад, научные публикации, спортивные достижения' },
  { question: 'Чем я увлекаюсь?', answer: 'Игры (стратегии), книги (научная фантастика), музыка (классический рок)' },
  { question: 'Какие мои личные качества?', answer: 'Ответственность, целеустремленность, умение работать в команде' },
  { question: 'Какие у меня профессиональные навыки?', answer:
    `<ul className="my-6 ml-6 list-disc [&>li]:mt-2">
       <li>Операционные системы: Windows, Linux</li>
       <li>Прикладные направления: разработка ПО, веб-разработка</li>
       <li>Языки программирования: Python, JavaScript</li>
       <li>Среды разработки: Visual Studio Code, PyCharm</li>
     </ul>`
  },
  { question: 'Есть ли у меня опыт работы?', answer: 'Да, прохождение практики в компании XYZ на должности стажёра-разработчика с июня по сентябрь 2021 года.' },
  { question: 'Какие мои планы на будущее?', answer: 'Развиваться в области IT, улучшать свои навыки программирования и работать в международной компании.' },
  { question: 'Как со мной связаться?', answer: 'E-mail: ivanov@example.com' }
];

const ResumePage: FC = () => {
  return (
    <div className='container xl:max-w-screen-xl flex-grow'>
      <div className="relative py-6 lg:gap-10 lg:py-8 lg:grid lg:grid-cols-[1fr_400px]">
        <div className='mx-auto w-full min-w-0'>
          <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
            Краткое резюме магистра
          </h1>
          <Accordion type='single' collapsible className='w-full max-w-screen-lg mt-5'>
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="text-left sm:text-center">{item.question}</AccordionTrigger>
                <AccordionContent>
                  <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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

export default ResumePage;
