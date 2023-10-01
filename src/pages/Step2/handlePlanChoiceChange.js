import { setPlanDetails } from 'redux/slice';
import { plansConfig } from '../../config/plansConfig';

export const handlePlanChoiceChange = (e, plan, dispatch) => {
  const selectedPlan = e.target.value;

  const planData = plansConfig[selectedPlan][plan];
  dispatch(
    setPlanDetails({
      plan: selectedPlan,
      planName: planData.name,
      price: planData.price,
      period: planData.period,
    })
  );
};
