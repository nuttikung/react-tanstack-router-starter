import type { FC, PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

type ItemGroupProps = PropsWithChildren & {
  className?: Pick<HTMLDivElement, 'className'>;
};

const itemClassname = 'flex-wrap px-4';

const ItemGroup: FC<ItemGroupProps> = ({ children, className }) => {
  return <div className={cn(itemClassname, className)}>{children}</div>;
};

export { ItemGroup };
