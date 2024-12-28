import { useFeatureCardContext } from './feature-card-context';

const FeatureCardIcon = () => {
  const { icon } = useFeatureCardContext();
  return <div className="flex-none mr-2">{icon}</div>;
};

FeatureCardIcon.displayName = 'FeatureCardIcon';

export { FeatureCardIcon };
