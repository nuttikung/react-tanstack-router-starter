import type { FC, HTMLAttributes, PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

const FeatureCardRow: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({
  className,
  children,
}) => {
  return <div className={cn('flex items-center gap-1 p-1', className)}>{children}</div>;
};

FeatureCardRow.displayName = 'FeatureCardRow';

export { FeatureCardRow };
