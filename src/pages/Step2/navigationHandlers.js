import { useNavigate } from 'react-router-dom';
import { PLANS, SERVICES } from '../../plansConfig/plansConfig';

export const useNavigationHandlers = (
  plan,
  setPlanDetails,
  planDetails,
  selectedInput
) => {
  const navigate = useNavigate();

  const handleToggleChange = () => {
    let newPlan = plan === 'Monthly' ? 'Yearly' : 'Monthly';

    const updatedServices = Object.keys(planDetails.services).reduce(
      (acc, serviceKey) => {
        acc[serviceKey] = {
          ...SERVICES[serviceKey],
          price:
            newPlan === 'Monthly'
              ? SERVICES[serviceKey].monthlyPrice
              : SERVICES[serviceKey].yearlyPrice,
          period:
            newPlan === 'Monthly'
              ? SERVICES[serviceKey].monthlyPeriod
              : SERVICES[serviceKey].yearlyPeriod,
        };
        return acc;
      },
      {}
    );

    const planConfig = PLANS[selectedInput.toUpperCase()];
    const newPrice =
      newPlan === 'Monthly' ? planConfig.monthlyPrice : planConfig.yearlyPrice;
    const newPeriod =
      newPlan === 'Monthly'
        ? planConfig.monthlyPeriod
        : planConfig.yearlyPeriod;
    const newPlanName = planConfig.name;

    setPlanDetails(prevDetails => ({
      ...prevDetails,
      plan: newPlan,
      price: newPrice,
      period: newPeriod,
      planName: newPlanName,
      services: updatedServices,
    }));

    navigate(newPlan === 'Monthly' ? '/step2-monthly' : '/step2-yearly');
  };

  const onNextStep = () => {
    if (!selectedInput) {
      alert('Please select a plan.');
    } else {
      plan === 'Monthly'
        ? navigate('/step3-monthly')
        : navigate('/step3-yearly');
    }
  };

  const onGoBack = () => {
    navigate('/');
  };

  return { handleToggleChange, onNextStep, onGoBack };
};
