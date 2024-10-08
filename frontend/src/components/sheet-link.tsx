import { FC, ReactNode } from 'react';
import { SheetClose } from './ui/sheet';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { cn } from '@/lib/utils';

type SheetLinkProps = Omit<NavLinkProps, 'className'> & {
  children: ReactNode;
  className?: string;
};

const SheetLink: FC<SheetLinkProps> = ({
  to,
  children,
  className,
  ...props
}) => {
  return (
    <SheetClose className="flex align-start w-full h-full">
      <NavLink
        to={to}
        className={({ isActive }) =>
          cn(
            'flex flex-1 transition-colors font-semibold pl-6 border-l -ml-px hover:text-foreground/80 hover:border-foreground/20 text-muted-foreground/60',
            isActive
              && 'text-foreground border-foreground',
            className,
          )
        }
        {...props}
      >
        {children}
      </NavLink>
    </SheetClose>
  );

{/* <SheetClose asChild> */}
{/*   <Link */}
{/*     to='/resume' */}
{/*     className='transition-colors font-semibold hover:text-foreground/80 hover:border-foreground/20 text-muted-foreground/60 pl-6 border-l -ml-px' */}
{/*   > */}
{/*     Резюме */}
{/*   </Link> */}
{/* </SheetClose> */}
{/* <SheetClose asChild> */}
{/*   <Link */}
{/*     to='/biography' */}
{/*     className='transition-colors font-semibold text-foreground pl-6 border-l border-foreground -ml-px' */}
{/*   > */}
{/*     Биография */}
{/*   </Link> */}
{/* </SheetClose> */}
};

export default SheetLink;
