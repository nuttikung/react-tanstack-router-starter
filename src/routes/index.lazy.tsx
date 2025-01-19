import { createLazyFileRoute } from '@tanstack/react-router';

import { SingleLayout } from '@/components/shared/layout';

export const Route = createLazyFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <SingleLayout>
      <div className="container mx-auto max-w-screen-2xl items-center">
        <div>Fake long content</div>
      </div>
      <div className="h-screen bg-slate-600" />
      <div className="h-screen bg-slate-600" />
      <div className="h-screen bg-slate-600" />
      <div className="h-screen bg-slate-600" />
    </SingleLayout>
  );
}
