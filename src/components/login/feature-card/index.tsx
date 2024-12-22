import InternalFeatureCard from './feature-card-context';
import { FeatureCardIcon } from './feature-card-icon';
import { FeatureCardTitle } from './feature-card-title';
import { FeatureCardDescription } from './feature-card-description';
import { FeatureCardRow } from './feature-card-row';

type TInternalFeatureCard = typeof InternalFeatureCard;

type TFeatureCard = TInternalFeatureCard & {
  Icon: typeof FeatureCardIcon;
  Title: typeof FeatureCardTitle;
  Description: typeof FeatureCardDescription;
  Row: typeof FeatureCardRow;
};

const FeatureCard = InternalFeatureCard as TFeatureCard;

FeatureCard.Icon = FeatureCardIcon;
FeatureCard.Title = FeatureCardTitle;
FeatureCard.Description = FeatureCardDescription;
FeatureCard.Row = FeatureCardRow;

if (process.env.NODE_ENV !== 'production') {
  FeatureCard.displayName = 'FeatureCard';
}

export default FeatureCard;
