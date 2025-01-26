import { RouterProvider, createRouter } from '@tanstack/react-router';

import { routeTree } from './routeTree.gen';
import { name } from '../package.json';

import { ThemeProvider } from '@/components/shared/theme-provider';

// Import the generated route tree

// Create a new router instance
const router = createRouter({ routeTree, basepath: name });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export { router };

export default App;
