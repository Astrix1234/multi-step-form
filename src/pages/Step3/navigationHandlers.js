import { useNavigate } from 'react-router-dom';

export const useNavigationHandlers = plan => {
  const navigate = useNavigate();

  const onNextStep = () => {
    navigate('/step4');
  };

  const onGoBack = () => {
    plan === 'Monthly' ? navigate('/step2-monthly') : navigate('/step2-yearly');
  };

  return { onNextStep, onGoBack };
};
