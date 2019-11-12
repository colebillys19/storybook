import {
  msBrightPurple,
  msDarkGrey,
  msMainGreen,
  ssDarkBlue,
  ssLightBlue,
  ssMainBlue,
  ssYellow,
} from './defaultStyleHelper';

import {
  EscrowStatementImage,
  InsuranceClaimImage,
  LenderInsuranceImage,
  PaymentAssistanceImage,
  YearEndTaxImage,
} from '../images';

export const iconOptions = {
  cancel: 'cancel',
  inbox: 'inbox',
  profile: 'profile',
  star: 'star',
};

export const iconSizeOptions = {
  large: 'large',
  medium: 'medium',
  mediumLarge: 'mediumLarge',
  mediumSmall: 'mediumSmall',
  small: 'small',
  xSmall: 'xSmall',
};

export const headingColorOptions = {
  msBrightPurple,
  msDarkGrey,
  msMainGreen,
};

export const enterDelayOptions = {
  '50ms': 50,
  '100ms': 100,
  '250ms': 200,
  '500ms': 500,
  '750ms': 750,
  '1000ms': 1000,
};

/* eslint-disable sort-keys */
export const placementOptions = {
  'top-start': 'top-start',
  top: 'top',
  'top-end': 'top-end',
  'right-start': 'right-start',
  right: 'right',
  'right-end': 'right-end',
  'bottom-start': 'bottom-start',
  bottom: 'bottom',
  'bottom-end': 'bottom-end',
  'left-start': 'left-start',
  left: 'left',
  'left-end': 'left-end',
};
/* eslint-enable sort-keys */

export const colorOptions = {
  msBrightPurple,
  msDarkGrey,
  msMainGreen,
  ssDarkBlue,
  ssLightBlue,
  ssMainBlue,
  ssYellow,
};

export const defaultCarouselItem = {
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, mollitia.',
  imageUrl: PaymentAssistanceImage,
  title: 'Carousel Item Title',
};

export const carouselItems = [
  {
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, mollitia.',
    imageUrl: PaymentAssistanceImage,
    title: 'Payment Assistance Title',
  },
  {
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, mollitia.',
    imageUrl: EscrowStatementImage,
    title: 'Escrow Statement Title',
  },
  {
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, mollitia.',
    imageUrl: InsuranceClaimImage,
    title: 'Insurance Claim Title',
  },
  {
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, mollitia.',
    imageUrl: LenderInsuranceImage,
    title: 'Lender Insurance Title',
  },
  {
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, mollitia.',
    imageUrl: YearEndTaxImage,
    title: 'Year End Tax Title',
  },
];

export const itemsPerSlideOptions = {
  3: 3,
  4: 4,
  5: 5,
};
export const itemsPerSlideDefault = 4;
