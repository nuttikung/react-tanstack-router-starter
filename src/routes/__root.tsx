import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import Navbar from '@/components/shared/navbar/navbar';

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex flex-col flex-auto min-h-full">
        <Navbar />
        <Outlet />
        <TanStackRouterDevtools />
      </div>
    </>
  ),
});
