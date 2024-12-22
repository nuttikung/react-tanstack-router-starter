import { createLazyFileRoute } from '@tanstack/react-router';

import { Layout } from '@/components/shared/layout/layout';

export const Route = createLazyFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Layout>
      <div className="container mx-auto max-w-screen-2xl items-center">
        <div>Fake long content</div>
      </div>
      <div className="h-screen bg-slate-600" />
      <div className="h-screen bg-slate-600" />
      <div className="h-screen bg-slate-600" />
      <div className="h-screen bg-slate-600" />
    </Layout>
  );
}
