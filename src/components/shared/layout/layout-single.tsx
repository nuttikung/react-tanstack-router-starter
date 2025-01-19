import type { FC, PropsWithChildren } from 'react';

import Navbar from '@/components/shared/navbar/navbar';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col flex-auto">
      <Navbar />
      <div className="max-h-[calc(100svh-56px)]">{children}</div>
    </div>
  );
};

export { Layout };
