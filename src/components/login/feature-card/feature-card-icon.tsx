import composeHooks from 'react-hooks-compose';
import type { FC } from 'react';

import type { TFeatureCardContext } from './feature-card-context';
import { useFeatureCardContext } from './feature-card-context';

type FeatureCardIconProps = {
  icon: TFeatureCardContext['icon'];
};

const FeatureCardIcon: FC<FeatureCardIconProps> = ({ icon }) => {
  return <div className="flex-none mr-2">{icon}</div>;
};

FeatureCardIcon.displayName = 'FeatureCardIcon';

const FeatureCardIconWithContext = composeHooks({
  useFeatureCardContext,
})(FeatureCardIcon);

export { FeatureCardIconWithContext as FeatureCardIcon };
