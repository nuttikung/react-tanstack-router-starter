import { Layout } from '@/components/shared/layout/layout';
import { COMPONENTS } from '@/pages/components/constant';

const meta = {
  title: 'Components',
};

const ComponentPage = () => {
  return (
    <>
      <title>{meta.title}</title>
      <Layout>
        <main>
          <div className="relative">
            {COMPONENTS.map(({ component, name }) => (
              <div className="container mx-auto py-4" key={name}>
                {component}
              </div>
            ))}
            <div className="w-full h-full bg-gray-50 dark:bg-gray-950 top-0 left-0 absolute -z-[1]" />
          </div>
        </main>
      </Layout>
    </>
  );
};

export default ComponentPage;
