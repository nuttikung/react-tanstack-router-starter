import type { FC, PropsWithChildren } from 'react';

import Navbar from '../navbar/navbar';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col flex-auto min-h-full">
      <Navbar />
      {children}
    </div>
  );
};

export { Layout };
