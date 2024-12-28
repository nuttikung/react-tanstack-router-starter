import { Terminal } from 'lucide-react';
import { AlertCircle } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const AlertDemo = () => {
  return (
    <>
      <Alert className="my-2">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Default!</AlertTitle>
        <AlertDescription>Example default mode.</AlertDescription>
      </Alert>

      <Alert variant="primary" className="my-2">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Primary!</AlertTitle>
        <AlertDescription>
          Light mode will show as primary, Dark mode will show white for background and gray for
          typography.
        </AlertDescription>
      </Alert>

      <Alert variant="secondary" className="my-2 bg-secondary">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Secondary!</AlertTitle>
        <AlertDescription>Secondary for light and dark modes.</AlertDescription>
      </Alert>

      <Alert variant="info" className="my-2">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Info!</AlertTitle>
        <AlertDescription>Light and Dark mode will show the same.</AlertDescription>
      </Alert>

      <Alert variant="destructive" className="my-2">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
      </Alert>
    </>
  );
};

export default AlertDemo;
