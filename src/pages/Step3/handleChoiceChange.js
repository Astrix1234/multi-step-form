import { SERVICES } from '../../plansConfig/plansConfig';

export const handleChoiceChange = (e, plan, setPlanDetails) => {
  const { value, checked } = e.target;

  const serviceDetails = {
    ...SERVICES[value],
    price:
      plan === 'Monthly'
        ? SERVICES[value].monthlyPrice
        : SERVICES[value].yearlyPrice,
    period:
      plan === 'Monthly'
        ? SERVICES[value].monthlyPeriod
        : SERVICES[value].yearlyPeriod,
  };

  setPlanDetails(prevDetails => {
    let updatedServices = { ...prevDetails.services };
    let updatedCheckboxes = [...prevDetails.selectedCheckbox];

    if (checked) {
      updatedServices[value] = serviceDetails;
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
