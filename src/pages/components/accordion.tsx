import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import ComponentMenus from '@/pages/components/shared/menu';
import { SingleLayout, SplitLayout } from '@/components/shared/layout';
import { ScrollArea } from '@/components/ui/scroll-area';

const meta = {
  title: 'Component - Accordion',
};

const AccordionDemo = () => {
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
              <div className="text-xl">Accordion</div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is it styled?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It comes with default styles that matches the other components&apos;
                    aesthetic.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is it animated?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It's animated by default, but you can disable it if you prefer.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </ScrollArea>
          </SplitLayout.Right>
        </SplitLayout>
      </SingleLayout>
    </>
  );
};

export default AccordionDemo;
