import { Terminal } from 'lucide-react';
import { AlertCircle } from 'lucide-react';

import ComponentMenus from '@/pages/components/shared/menu';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { SingleLayout, SplitLayout } from '@/components/shared/layout';
import { ScrollArea } from '@/components/ui/scroll-area';

const meta = {
  title: 'Component - Alert',
};

const AlertDemo = () => {
  return (
    <>
      <title>{meta.title}</title>
      <SingleLayout>
        <SplitLayout>
          <SplitLayout.Left>
            <ScrollArea className="gap-6 h-[calc(100svh-56px)]">
              <ComponentMenus />
            </ScrollArea>
          </SplitLayout.Left>
          <SplitLayout.Right>
            <ScrollArea className="h-[calc(100svh-56px)]">
              <div className="text-xl">Alert</div>
              <Alert className="my-2">
                <Terminal className="h-4 w-4" />
                <AlertTitle>Default!</AlertTitle>
                <AlertDescription>Example default mode.</AlertDescription>
              </Alert>

              <Alert variant="primary" className="my-2">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Primary!</AlertTitle>
                <AlertDescription>
                  Light mode will show as primary, Dark mode will show white for background and gray
                  for typography.
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
            </ScrollArea>
          </SplitLayout.Right>
        </SplitLayout>
      </SingleLayout>
    </>
  );
};

export default AlertDemo;
