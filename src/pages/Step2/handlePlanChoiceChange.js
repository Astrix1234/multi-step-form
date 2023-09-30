export const handlePlanChoiceChange = (e, plan, setPlanDetails) => {
  const selectedPlan = e.target.value;

  let price, period, planName;
  switch (selectedPlan) {
    case 'arcade':
      price = plan === 'monthly' ? 9 : 90;
      period = plan === 'monthly' ? 'mo' : 'yr';
      planName = 'Arcade';
      break;
    case 'advanced':
      price = plan === 'monthly' ? 12 : 120;
      period = plan === 'monthly' ? 'mo' : 'yr';
      planName = 'Advanced';
      break;
    case 'pro':
      price = plan === 'monthly' ? 15 : 150;
      period = plan === 'monthly' ? 'mo' : 'yr';
      planName = 'Pro';
      break;
    default:
      price = 0;
      period = 'mo';
      planName = 'Arcade';
  }

  setPlanDetails(prevDetails => ({ ...prevDetails, price, period, planName }));
};
