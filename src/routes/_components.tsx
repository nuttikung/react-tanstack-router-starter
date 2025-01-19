import { createFileRoute, Outlet } from '@tanstack/react-router';

import ComponentMenus from '@/pages/components/shared/menu';
import { SingleLayout, SplitLayout } from '@/components/shared/layout';
import { ScrollArea } from '@/components/ui/scroll-area';

export const Route = createFileRoute('/_components')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <SingleLayout>
      <SplitLayout>
        <SplitLayout.Left>
          <ScrollArea className="gap-6 h-[calc(100svh-56px)]">
            <ComponentMenus />
          </ScrollArea>
        </SplitLayout.Left>
        <SplitLayout.Right>
          <ScrollArea className="h-[calc(100svh-56px)]">
            <Outlet />
          </ScrollArea>
        </SplitLayout.Right>
      </SplitLayout>
    </SingleLayout>
  );
}
