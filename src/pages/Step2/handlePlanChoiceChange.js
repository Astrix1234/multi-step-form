import { PLANS } from '../../plansConfig/plansConfig';

export const handlePlanChoiceChange = (e, plan, setPlanDetails) => {
  const selectedPlan = e.target.value;
  const planConfig = PLANS[selectedPlan.toUpperCase()];

  const price =
    plan === 'Monthly' ? planConfig.monthlyPrice : planConfig.yearlyPrice;
  const period =
    plan === 'Monthly' ? planConfig.monthlyPeriod : planConfig.yearlyPeriod;
  const planName = planConfig.name;

  setPlanDetails(prevDetails => ({
    ...prevDetails,
    price,
    period,
    planName,
    selectedInput: selectedPlan,
  }));
};
