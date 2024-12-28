import { useFeatureCardContext } from './feature-card-context';

const FeatureCardTitle = () => {
  const { title } = useFeatureCardContext();
  return <div className="flex-1 text-sm">{title}</div>;
};

FeatureCardTitle.displayName = 'FeatureCardTitle';

export { FeatureCardTitle };
