import { createLazyFileRoute } from '@tanstack/react-router';

import AlertDemo from '@/pages/components/alert';

export const Route = createLazyFileRoute('/components/alert')({
  component: AlertDemo,
});
