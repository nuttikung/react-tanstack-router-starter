import type { LinkOptions } from '@tanstack/react-router';

// ----------------------------------------------------------------------

type TComponent = {
  name: string;
  // component: ReactNode;
  to: LinkOptions['to'];
};

// ----------------------------------------------------------------------

const COMPONENTS: Array<TComponent> = [
  {
    name: 'Alert',
    // component: <AlertDemo />,
    to: '/components/alert',
  },
  {
    name: 'Accordion',
    // component: <AccordionDemo />,
    to: '/components/accordion',
  },
];

export { COMPONENTS };
