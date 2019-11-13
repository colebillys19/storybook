import React from 'react';
import useState from 'storybook-addon-state';
import {
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs/react';

import BaseCarousel from '../BaseCarousel';
import BaseCarouselDocs from '../docs/BaseCarousel.docs.mdx';
import {
  EscrowStatementImage,
  InsuranceClaimImage,
  LenderInsuranceImage,
  PaymentAssistanceImage,
  YearEndTaxImage,
} from '../../../images';

const itemsPerSlideOptions = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
};

export default {
  decorators: [withKnobs],
  parameters: { component: BaseCarousel, docs: { page: BaseCarouselDocs } },
  title: 'Miscellaneous|BaseCarousel',
};

export const defaultStory = () => {
  const carouselItems = [
    {
      description: text('Item 1 Description', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, mollitia.'),
      imageUrl: PaymentAssistanceImage,
      title: text('Item 1 Title', 'Payment Assistance Title'),
    },
    {
      description: text('Item 2 Description', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, mollitia.'),
      imageUrl: EscrowStatementImage,
      title: text('Item 2 Title', 'Escrow Assistance Title'),
    },
    {
      description: text('Item 3 Description', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, mollitia.'),
      imageUrl: InsuranceClaimImage,
      title: text('Item 3 Title', 'Insurance Claim Title'),
    },
    {
      description: text('Item 4 Description', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, mollitia.'),
      imageUrl: LenderInsuranceImage,
      title: text('Item 4 Title', 'Lender Insurance Title'),
    },
    {
      description: text('Item 5 Description', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, mollitia.'),
      imageUrl: YearEndTaxImage,
      title: text('Item 5 Title', 'Year End Tax Title'),
    },
  ];
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [position, setPosition] = useState(0);
  return (
    <BaseCarousel
      items={carouselItems}
      itemsPerSlide={select('Items Per Slide', itemsPerSlideOptions, 3)}
      position={position}
      setPosition={setPosition}
    />
  );
};

defaultStory.story = { name: 'default' };
