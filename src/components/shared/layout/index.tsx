import {
  Layout as InternalSplitLayout,
  Left as InternalSplitLayoutLeft,
  Right as InternalSplitLayoutRight,
} from '@/components/shared/layout/layout-split';
import { Layout as SingleLayout } from '@/components/shared/layout/layout-single.tsx';

type TInternalSplitLayout = typeof InternalSplitLayout;

type TSplitLayout = TInternalSplitLayout & {
  Left: typeof InternalSplitLayoutLeft;
  Right: typeof InternalSplitLayoutRight;
};

const SplitLayout = InternalSplitLayout as TSplitLayout;

SplitLayout.Left = InternalSplitLayoutLeft;
SplitLayout.Right = InternalSplitLayoutRight;

if (process.env.NODE_ENV !== 'production') {
  SplitLayout.displayName = 'SplitLayout';
  SingleLayout.displayName = 'SingleLayout';
}

export { SingleLayout, SplitLayout };
