export const handleChoiceChange = (e, plan, setPlanDetails) => {
  const { value, checked } = e.target;

  const serviceDetails = {
    online: {
      name: 'Online service',
      price: plan === 'Monthly' ? 1 : 10,
      period: plan === 'Monthly' ? 'mo' : 'yr',
    },
    larger: {
      name: 'Larger storage',
      price: plan === 'Monthly' ? 2 : 20,
      period: plan === 'Monthly' ? 'mo' : 'yr',
    },
    custom: {
      name: 'Customizable profile',
      price: plan === 'Monthly' ? 2 : 20,
      period: plan === 'Monthly' ? 'mo' : 'yr',
    },
  };

  setPlanDetails(prevDetails => {
    let updatedServices = { ...prevDetails.services };
    let updatedCheckboxes = [...prevDetails.selectedCheckbox];

    if (checked) {
      updatedServices[value] = serviceDetails[value];
      updatedCheckboxes.push(value);
    } else {
      delete updatedServices[value];
      const index = updatedCheckboxes.indexOf(value);
      if (index > -1) {
        updatedCheckboxes.splice(index, 1);
      }
    }

    return {
      ...prevDetails,
      services: updatedServices,
      selectedCheckbox: updatedCheckboxes,
    };
  });
};
