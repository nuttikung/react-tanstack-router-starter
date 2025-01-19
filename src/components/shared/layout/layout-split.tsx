import type { FC, PropsWithChildren } from 'react';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="container mx-auto">
      <main className="flex">{children}</main>
    </div>
  );
};

const Left: FC<PropsWithChildren> = ({ children }) => {
  return (
    <aside className="hidden lg:block flex-none w-80">
      <div className="h-full overflow-auto py-6 pr-4">{children}</div>
    </aside>
  );
};

const Right: FC<PropsWithChildren> = ({ children }) => {
  return <div className="flex-1 px-4 py-6">{children}</div>;
};

export { Layout, Left, Right };
