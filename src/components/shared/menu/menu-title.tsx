import type { FC, ReactElement } from 'react';

import { cn } from '@/lib/utils';

type TitleProps = {
  title: string | ReactElement;
  className?: Pick<HTMLHeadingElement, 'className'>;
};

const titleClassname = 'rounded-md px-2 py-1 text-sm font-semibold';

const Title: FC<TitleProps> = ({ className, title, ...props }) => {
  return (
    <h4 className={cn(titleClassname, className)} {...props}>
      {title}
    </h4>
  );
};

export { Title };
