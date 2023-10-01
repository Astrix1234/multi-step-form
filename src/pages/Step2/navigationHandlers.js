import { useNavigate } from 'react-router-dom';

export const useNavigationHandlers = plan => {
  const navigate = useNavigate();

  const onNextStep = () => {
    plan === 'monthly' ? navigate('/step3-monthly') : navigate('/step3-yearly');
  };

  const onGoBack = () => {
    navigate('/');
  };

  return { onNextStep, onGoBack };
};
