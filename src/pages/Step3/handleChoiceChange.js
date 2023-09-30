export const handleChoiceChange = (e, plan, planDetails, setPlanDetails) => {
  const { value, checked } = e.target;

  const serviceDetails = {
    online: {
      name: 'Online service',
      price: plan === 'monthly' ? 1 : 10,
      period: plan === 'monthly' ? 'mo' : 'yr',
    },
    larger: {
      name: 'Larger storage',
      price: plan === 'monthly' ? 2 : 20,
      period: plan === 'monthly' ? 'mo' : 'yr',
    },
    custom: {
      name: 'Customizable profile',
      price: plan === 'monthly' ? 3 : 30,
      period: plan === 'monthly' ? 'mo' : 'yr',
    },
  };

  let updatedServices = { ...planDetails.services };

  if (checked) {
    updatedServices[value] = serviceDetails[value];
  } else {
    delete updatedServices[value];
  }

  setPlanDetails(prevDetails => ({
    ...prevDetails,
    services: updatedServices,
  }));
};
