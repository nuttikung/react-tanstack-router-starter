import type { ReactNode } from 'react';

import AlertDemo from '@/pages/components/alert';

// ----------------------------------------------------------------------

type TComponent = {
  name: string;
  component: ReactNode;
};

// ----------------------------------------------------------------------

const COMPONENTS: Array<TComponent> = [
  {
    name: 'Alert',
    component: <AlertDemo />,
  },
];

export { COMPONENTS };
