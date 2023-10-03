import { useNavigate } from 'react-router-dom';

export const useNavigationHandlers = (
  plan,
  setPlanDetails,
  planDetails,
  selectedInput
) => {
  const navigate = useNavigate();

  const handleToggleChange = () => {
    let newPlan = plan === 'Monthly' ? 'Yearly' : 'Monthly';
    let updatedServices = { ...planDetails.services };

    for (let serviceKey in updatedServices) {
      switch (serviceKey) {
        case 'online':
          updatedServices[serviceKey].price = newPlan === 'Monthly' ? 1 : 10;
          break;
        case 'larger':
          updatedServices[serviceKey].price = newPlan === 'Monthly' ? 2 : 20;
          break;
        case 'custom':
          updatedServices[serviceKey].price = newPlan === 'Monthly' ? 2 : 20;
          break;
        default:
          break;
      }
      updatedServices[serviceKey].period = newPlan === 'Monthly' ? 'mo' : 'yr';
    }

    let newPrice, newPeriod, newPlanName;
    switch (selectedInput) {
      case 'arcade':
        newPrice = newPlan === 'Monthly' ? 9 : 90;
        newPeriod = newPlan === 'Monthly' ? 'mo' : 'yr';
        newPlanName = 'Arcade';
        break;
      case 'advanced':
        newPrice = newPlan === 'Monthly' ? 12 : 120;
        newPeriod = newPlan === 'Monthly' ? 'mo' : 'yr';
        newPlanName = 'Advanced';
        break;
      case 'pro':
        newPrice = newPlan === 'Monthly' ? 15 : 150;
        newPeriod = newPlan === 'Monthly' ? 'mo' : 'yr';
        newPlanName = 'Pro';
        break;
      default:
        newPrice = 0;
        newPeriod = 'mo';
        newPlanName = 'Arcade';
    }

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
