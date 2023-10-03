export const handlePlanChoiceChange = (e, plan, setPlanDetails) => {
  const selectedPlan = e.target.value;

  let price, period, planName;
  switch (selectedPlan) {
    case 'arcade':
      price = plan === 'Monthly' ? 9 : 90;
      period = plan === 'Monthly' ? 'mo' : 'yr';
      planName = 'Arcade';
      break;
    case 'advanced':
      price = plan === 'Monthly' ? 12 : 120;
      period = plan === 'Monthly' ? 'mo' : 'yr';
      planName = 'Advanced';
      break;
    case 'pro':
      price = plan === 'Monthly' ? 15 : 150;
      period = plan === 'Monthly' ? 'mo' : 'yr';
      planName = 'Pro';
      break;
    default:
      price = 0;
      period = 'mo';
      planName = 'Arcade';
  }

  setPlanDetails(prevDetails => ({
    ...prevDetails,
    price,
    period,
    planName,
    selectedInput: selectedPlan,
  }));
};
