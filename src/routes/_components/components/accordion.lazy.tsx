import { createLazyFileRoute } from '@tanstack/react-router';

import AccordionDemo from '@/pages/components/accordion';

export const Route = createLazyFileRoute('/_components/components/accordion')({
  component: AccordionDemo,
});
