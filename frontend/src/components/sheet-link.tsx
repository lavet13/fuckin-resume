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
    <SheetClose className="flex w-full">
      <NavLink
        to={to}
        className={({ isActive }) =>
          cn(
            'w-full text-left transition-colors font-semibold pl-6 border-l -ml-px text-muted-foreground/60',
            isActive
              ? 'text-foreground border-foreground' : 'hover:text-foreground/80 hover:border-foreground/20',
            className,
          )
        }
        {...props}
      >
        {children}
      </NavLink>
    </SheetClose>
  );
}

export default SheetLink;
