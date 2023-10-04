import IconArcade from 'components/IconArcade/IconArcade';
import IconAdvanced from 'components/IconAdvanced/IconAdvanced';
import IconPro from 'components/IconPro/IconPro';

export const PLANS = {
  ARCADE: {
    name: 'Arcade',
    monthlyPrice: 9,
    yearlyPrice: 90,
    monthlyPeriod: 'mo',
    yearlyPeriod: 'yr',
    monthlyComment: '',
    yearlyComment: '2 months free.',
    icon: IconArcade,
  },
  ADVANCED: {
    name: 'Advanced',
    monthlyPrice: 12,
    yearlyPrice: 120,
    monthlyPeriod: 'mo',
    yearlyPeriod: 'yr',
    monthlyComment: '',
    yearlyComment: '2 months free.',
    icon: IconAdvanced,
  },
  PRO: {
    name: 'Pro',
    monthlyPrice: 15,
    yearlyPrice: 150,
    monthlyPeriod: 'mo',
    yearlyPeriod: 'yr',
    monthlyComment: '',
    yearlyComment: '2 months free.',
    icon: IconPro,
  },
};

export const SERVICES = {
  online: {
    name: 'Online service',
    monthlyPrice: 1,
    yearlyPrice: 10,
    monthlyPeriod: 'mo',
    yearlyPeriod: 'yr',
    comment: 'Access to multiplayer games',
  },
  larger: {
    name: 'Larger storage',
    monthlyPrice: 2,
    yearlyPrice: 20,
    monthlyPeriod: 'mo',
    yearlyPeriod: 'yr',
    comment: 'Extra 1TB of cloud save',
  },
  custom: {
    name: 'Customizable profile',
    monthlyPrice: 2,
    yearlyPrice: 20,
    monthlyPeriod: 'mo',
    yearlyPeriod: 'yr',
    comment: 'Custom theme on your profile',
  },
};
