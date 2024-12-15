import { createLazyFileRoute } from '@tanstack/react-router';

import DocsPage from '@/pages/docs';

export const Route = createLazyFileRoute('/docs/')({
  component: DocsPage,
});
