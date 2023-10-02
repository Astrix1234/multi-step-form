import { useNavigate } from 'react-router-dom';

export const useNavigationHandlers = (
  plan,
  setPlanDetails,
  setSelectedInput
) => {
  const navigate = useNavigate();

  const handleToggleChange = () => {
    if (plan === 'monthly') {
      setPlanDetails(prevDetails => ({ ...prevDetails, plan: 'yearly' }));
      setSelectedInput('');
      navigate('/step2-yearly');
    } else {
      setPlanDetails(prevDetails => ({ ...prevDetails, plan: 'monthly' }));
      setSelectedInput('');
      navigate('/step2-monthly');
    }
  };

  const onNextStep = () => {
    plan === 'monthly' ? navigate('/step3-monthly') : navigate('/step3-yearly');
  };

  const onGoBack = () => {
    navigate('/');
  };

  return { handleToggleChange, onNextStep, onGoBack };
};
