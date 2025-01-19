import type { FC, PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

type ItemProps = PropsWithChildren & {
  className?: Pick<HTMLDivElement, 'className'>;
};

const menuItemClassname = 'py-1 w-full';

const Item: FC<ItemProps> = ({ className, children, ...props }) => {
  return (
    <div className={cn(menuItemClassname, className)} {...props}>
      {children}
    </div>
  );
};

export { Item };
