import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { Button } from '@/components/ui/button';
import { Link, NavLink, NavLinkProps } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { FC, ReactNode, useState } from 'react';
import { Icons } from './icons';

type SheetLinkProps =  Omit<NavLinkProps, 'className'> & {
  children: ReactNode;
  className?: string;
  onOpenChange: (open: boolean) => void;
};

const SheetLink: FC<SheetLinkProps> = ({
  to,
  children,
  className,
  onOpenChange,
  ...props
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          'w-full text-left transition-colors font-semibold pl-6 border-l -ml-px text-muted-foreground/60',
          isActive
            ? 'text-foreground border-foreground'
            : 'hover:text-foreground/80 hover:border-foreground/20',
          className,
        )
      }
      onClick={() => {
        onOpenChange?.(false);
      }}
      {...props}
    >
      {children}
    </NavLink>
  );
};

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          className='w-8 h-8 shrink-0 md:hidden hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0'
          variant='ghost'
          size='icon'
        >
          <Icons.sandwitch className='h-5 w-5' />
          <span className='sr-only'>Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent className='pr-0' side='left'>
        <SheetClose asChild>
          <Link to='/' className={cn('flex items-center space-x-2')}>
            <svg viewBox='0 0 256 256' className='h-4 w-4'>
              <rect width='256' height='256' fill='none'></rect>
              <line
                x1='208'
                y1='128'
                x2='128'
                y2='208'
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='16'
              ></line>
              <line
                x1='192'
                y1='40'
                x2='40'
                y2='192'
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='16'
              ></line>
            </svg>
            <span className='font-bold text-sm'>Skinder P.</span>
          </Link>
        </SheetClose>
        <ScrollArea className='flex flex-col relative overflow-hidden my-4 h-[calc(100vh-8rem)] pb-10 pl-0'>
          <nav className='flex flex-col space-y-3 border-l'>
            <SheetLink onOpenChange={setOpen} to='/resume'>Резюме</SheetLink>
            <SheetLink onOpenChange={setOpen} to='/biography'>Биография</SheetLink>
            <SheetLink onOpenChange={setOpen} to='/essay'>Реферат</SheetLink>
            <SheetLink onOpenChange={setOpen} to='/lib'>Библиотека</SheetLink>
            <SheetLink onOpenChange={setOpen} to='/source'>Ссылки</SheetLink>
            <SheetLink onOpenChange={setOpen} to='/statistic-search'>Отчет о поиске</SheetLink>
            <SheetLink onOpenChange={setOpen} to='/self'>Индивидуальный раздел</SheetLink>
          </nav>
          <div className='flex items-start flex-col space-y-1 pt-6 mt-auto pl-6'>
            <Button
              className='w-full justify-start align-start pl-0'
              variant='link'
              asChild
            >
              <Link to='https://donntu.ru/' target='_blank'>
                ДонНТУ
              </Link>
            </Button>
            <Button
              className='w-full justify-start pl-0'
              variant='link'
              asChild
            >
              <Link to='https://masters.donntu.ru/' target='_blank'>
                Портал магистров
              </Link>
            </Button>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};


export default MobileNav;
