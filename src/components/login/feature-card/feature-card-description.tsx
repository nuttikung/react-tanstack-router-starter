import { useFeatureCardContext } from './feature-card-context';

const FeatureCardDescription = () => {
  const { description } = useFeatureCardContext();
  return <div className="flex flex-1 text-sm dark:text-gray-500">{description}</div>;
};

FeatureCardDescription.displayName = 'FeatureCardDescription';

export { FeatureCardDescription };
