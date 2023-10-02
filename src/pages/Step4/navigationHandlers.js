import { useNavigate } from 'react-router-dom';

export const useNavigationHandlers = plan => {
  const navigate = useNavigate();

  const onNextStep = () => {
    navigate('/step5');
  };

  const onGoBack = () => {
    plan === 'Monthly' ? navigate('/step3-monthly') : navigate('/step3-yearly');
  };

  return { onNextStep, onGoBack };
};
