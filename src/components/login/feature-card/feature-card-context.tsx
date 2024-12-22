import type { FC, ReactNode } from 'react';
import { createContext, use } from 'react';

// ----------------------------------------------------------------------
type TFeatureCardContext = {
  icon?: ReactNode;
  title: string;
  description: string;
};

const defaultValue: TFeatureCardContext = { icon: null, title: '', description: '' };

// ----------------------------------------------------------------------

const FeatureCardContext = createContext<TFeatureCardContext>(defaultValue);

type FeatureCardProps = { children: ReactNode } & TFeatureCardContext;

const FeatureCard: FC<FeatureCardProps> = ({ children, ...props }) => {
  return <FeatureCardContext value={{ ...props }}>{children}</FeatureCardContext>;
};

// ----------------------------------------------------------------------

function useFeatureCardContext() {
  const context = use(FeatureCardContext);
  if (!context) {
    throw new Error('useFeatureCardContext must be used within a FeatureCard');
  }
  return context;
}

// ----------------------------------------------------------------------

export { useFeatureCardContext };
export type { TFeatureCardContext };
export default FeatureCard;
