import type { FC, PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

type WrapperProps = PropsWithChildren & {
  className?: Pick<HTMLDivElement, 'className'>;
};

const wrapperClassname = 'flex flex-col gap-1';

const Wrapper: FC<WrapperProps> = ({ children, className }) => {
  return <div className={cn(wrapperClassname, className)}>{children}</div>;
};

export { Wrapper };
