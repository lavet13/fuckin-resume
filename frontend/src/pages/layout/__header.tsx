import { ModeToggle } from '@/components/mode-toggle';
import { Link } from 'react-router-dom';
import { Button, buttonVariants } from '@/components/ui/button';
import { FC } from 'react';
import { cn } from '@/lib/utils';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import SheetLink from '@/components/sheet-link';

const Header: FC = () => {
  return (
    <header className='sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container h-14 flex items-center max-w-screen-2xl'>
        <div className='hidden md:flex'>
          <Link
            to='/'
            className={cn('mr-2 flex items-center space-x-2 lg:mr-3 xl:mr-6')}
          >
            <svg viewBox="0 0 256 256" className="h-6 w-6"><rect width="256" height="256" fill="none"></rect><line x1="208" y1="128" x2="128" y2="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="192" y1="40" x2="40" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>
            <span className='hidden font-bold xl:inline-block'>Skinder P.</span>
          </Link>
          <nav className='flex items-center space-x-3 text-sm lg:space-x-4 xl:space-x-6'>
            <Link
              to='/resume'
              className='transition-colors font-semibold hover:text-foreground/80 text-foreground/60 whitespace-nowrap'
            >
              Резюме
            </Link>
            <Link
              to='/biography'
              className='transition-colors font-semibold hover:text-foreground/80 text-foreground whitespace-nowrap'
            >
              Биография
            </Link>
            <Link
              to='/essay'
              className='transition-colors font-semibold hover:text-foreground/80 text-foreground/60 whitespace-nowrap'
            >
              Реферат
            </Link>
            <Link
              to='/lib'
              className='transition-colors font-semibold hover:text-foreground/80 text-foreground/60 whitespace-nowrap'
            >
              Библиотека
            </Link>
            <Link
              to='/source'
              className='transition-colors font-semibold hover:text-foreground/80 text-foreground/60 whitespace-nowrap'
            >
              Ссылки
            </Link>
            <Link
              to='/statistic-search'
              className='transition-colors font-semibold hover:text-foreground/80 text-foreground/60 whitespace-nowrap'
            >
              Отчет о поиске
            </Link>
            <Link
              to='/self'
              className='transition-colors font-semibold hover:text-foreground/80 text-foreground/60 whitespace-nowrap'
            >
              Индивидуальный раздел
            </Link>
          </nav>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              className='w-8 h-8 shrink-0 md:hidden'
              variant='ghost'
              size='icon'
            >
              <svg stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><path d="M3 5H11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 12H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 19H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
              <span className='sr-only'>Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="pr-0" side='left'>
            <SheetClose asChild>
              <Link
                to='/'
                className={cn('flex items-center space-x-2')}
              >
                <svg viewBox="0 0 256 256" className="h-4 w-4"><rect width="256" height="256" fill="none"></rect><line x1="208" y1="128" x2="128" y2="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="192" y1="40" x2="40" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>
                <span className='font-bold text-sm'>Skinder P.</span>
              </Link>
            </SheetClose>
            <ScrollArea className='flex flex-col relative overflow-hidden my-4 h-[calc(100vh-8rem)] pb-10 pl-0'>
              <nav className='flex flex-col space-y-3 border-l'>
                <SheetLink to='/resume'>
                  Резюме
                </SheetLink>
                <SheetClose asChild>
                  <Link
                    to='/biography'
                    className='transition-colors font-semibold text-foreground pl-6 border-l border-foreground -ml-px'
                  >
                    Биография
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    to='/essay'
                    className='transition-colors font-semibold hover:text-foreground/80 text-foreground/60 pl-6 border-l -ml-px'
                  >
                    Реферат
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    to='/lib'
                    className='transition-colors font-semibold hover:text-foreground/80 text-foreground/60 pl-6 border-l -ml-px'
                  >
                    Библиотека
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    to='/source'
                    className='transition-colors font-semibold hover:text-foreground/80 text-foreground/60 pl-6 border-l -ml-px'
                  >
                    Ссылки
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    to='/statistic-search'
                    className='transition-colors font-semibold hover:text-foreground/80 text-foreground/60 pl-6 border-l -ml-px'
                  >
                    Отчет о поиске
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                <Link
                  to='/self'
                  className='transition-colors font-semibold hover:text-foreground/80 text-foreground/60 pl-6 border-l -ml-px'
                >
                  Индивидуальный раздел
                </Link>
                </SheetClose>
              </nav>
              <div className="flex items-start flex-col space-y-1 pt-6 mt-auto">
                <Button className="w-full justify-start align-start pl-0" variant='link' asChild>
                  <Link to='https://donntu.ru/' target='_blank'>
                    ДонНТУ
                  </Link>
                </Button>
                <Button className="w-full justify-start pl-0" variant='link' asChild>
                  <Link to='https://masters.donntu.ru/' target='_blank'>
                    Портал магистров
                  </Link>
                </Button>
              </div>
            </ScrollArea>
          </SheetContent>
        </Sheet>
        <div className='flex flex-1 items-center justify-between space-x-2 md:justify-end'>
          <div className='hidden lg:flex flex-1 lg:w-auto lg:flex-none'>
            <Button className='px-2' variant='link' asChild>
              <Link to='https://donntu.ru/' target='_blank'>
                ДонНТУ
              </Link>
            </Button>
            <Button className='px-2' variant='link' asChild>
              <Link to='https://masters.donntu.ru/' target='_blank'>
                Портал магистров
              </Link>
            </Button>
          </div>
          <nav className='w-full lg:w-auto flex justify-end items-center'>
            <Link
              className={cn(
                buttonVariants({ variant: 'ghost', size: 'icon' }),
                'w-8 h-8',
              )}
              target='_blank'
              to='https://vk.com/beforeiclosemyeyesforever'
            >
              <svg
                viewBox='0 0 50 50'
                className='w-5 h-5 fill-foreground transition-colors'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37.72,33l-3.73-0.01 c0,0-0.08,0.01-0.21,0.01c-0.3,0-0.92-0.08-1.65-0.58c-1.31-0.91-2.56-3.17-3.55-3.17c-0.07,0-0.13,0.01-0.19,0.03 c-0.86,0.27-1.12,1.13-1.12,2.18c0,0.37-0.26,0.54-0.96,0.54h-1.93c-2.16,0-4.25-0.05-6.6-2.62c-3.46-3.79-6.7-10.53-6.7-10.53 s-0.18-0.39,0.01-0.62c0.18-0.21,0.6-0.23,0.76-0.23c0.04,0,0.06,0,0.06,0h4c0,0,0.37,0.07,0.64,0.27c0.23,0.17,0.35,0.48,0.35,0.48 s0.68,1.32,1.53,2.81c1.43,2.46,2.2,3.28,2.75,3.28c0.09,0,0.18-0.02,0.27-0.07c0.82-0.45,0.58-4.09,0.58-4.09s0.01-1.32-0.42-1.9 c-0.33-0.46-0.96-0.59-1.24-0.63c-0.22-0.03,0.14-0.55,0.62-0.79c0.62-0.3,1.65-0.36,2.89-0.36h0.6c1.17,0.02,1.2,0.14,1.66,0.25 c1.38,0.33,0.91,1.62,0.91,4.71c0,0.99-0.18,2.38,0.53,2.85c0.05,0.03,0.12,0.05,0.21,0.05c0.46,0,1.45-0.59,3.03-3.26 c0.88-1.52,1.56-3.03,1.56-3.03s0.15-0.27,0.38-0.41c0.22-0.13,0.22-0.13,0.51-0.13h0.03c0.32,0,3.5-0.03,4.2-0.03h0.08 c0.67,0,1.28,0.01,1.39,0.42c0.16,0.62-0.49,1.73-2.2,4.03c-2.82,3.77-3.14,3.49-0.8,5.67c2.24,2.08,2.7,3.09,2.78,3.22 C39.68,32.88,37.72,33,37.72,33z'></path>
              </svg>
              <span className='sr-only'>VKontakte</span>
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
