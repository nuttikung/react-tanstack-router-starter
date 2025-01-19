import ComponentMenus from '@/pages/components/shared/menu';
import { SingleLayout, SplitLayout } from '@/components/shared/layout';
import { COMPONENTS } from '@/pages/components/constant';
import { ScrollArea } from '@/components/ui/scroll-area';

const meta = {
  title: 'Components',
};

const ComponentPage = () => {
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
              {COMPONENTS.map(({ name }) => (
                <div key={name}>{name}</div>
              ))}
              <div className="w-full h-[3000px] bg-gray-50 dark:bg-gray-950 top-0 left-0 absolute -z-[1]" />
            </ScrollArea>
          </SplitLayout.Right>
        </SplitLayout>
      </SingleLayout>
    </>
  );
};

export default ComponentPage;
