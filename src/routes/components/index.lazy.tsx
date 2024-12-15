import { createLazyFileRoute } from '@tanstack/react-router';

import ComponentPage from '@/pages/components';

export const Route = createLazyFileRoute('/components/')({
  component: ComponentPage,
});
