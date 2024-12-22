import composeHooks from 'react-hooks-compose';
import type { FC } from 'react';

import type { TFeatureCardContext } from './feature-card-context';
import { useFeatureCardContext } from './feature-card-context';

// ----------------------------------------------------------------------

type FeatureCardTitleProps = {
  title: TFeatureCardContext['title'];
};

// ----------------------------------------------------------------------

const FeatureCardTitle: FC<FeatureCardTitleProps> = ({ title }) => {
  return <div className="flex-1 text-sm">{title}</div>;
};

FeatureCardTitle.displayName = 'FeatureCardTitle';

const FeatureCardTitleWithContext = composeHooks({
  useFeatureCardContext,
})(FeatureCardTitle);

export { FeatureCardTitleWithContext as FeatureCardTitle };
