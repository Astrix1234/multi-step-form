import { useNavigate } from 'react-router-dom';

export const useNavigationHandlers = (
  plan,
  setPlanDetails,
  setSelectedInput,
  selectedInput
) => {
  const navigate = useNavigate();

  const handleToggleChange = () => {
    if (plan === 'Monthly') {
      setPlanDetails(prevDetails => ({ ...prevDetails, plan: 'Yearly' }));
      setSelectedInput('');
      navigate('/step2-yearly');
    } else {
      setPlanDetails(prevDetails => ({ ...prevDetails, plan: 'Monthly' }));
      setSelectedInput('');
      navigate('/step2-monthly');
    }
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
