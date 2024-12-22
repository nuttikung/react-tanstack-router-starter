import composeHooks from 'react-hooks-compose';
import type { FC } from 'react';

import type { TFeatureCardContext } from './feature-card-context';
import { useFeatureCardContext } from './feature-card-context';

// ----------------------------------------------------------------------

type FeatureCardDescriptionProps = {
  description: TFeatureCardContext['description'];
};

// ----------------------------------------------------------------------

const FeatureCardDescription: FC<FeatureCardDescriptionProps> = ({ description }) => {
  return <div className="flex flex-1 text-sm dark:text-gray-500">{description}</div>;
};

FeatureCardDescription.displayName = 'FeatureCardDescription';

const FeatureCardDescriptionWithContext = composeHooks({
  useFeatureCardContext,
})(FeatureCardDescription);

export { FeatureCardDescriptionWithContext as FeatureCardDescription };
