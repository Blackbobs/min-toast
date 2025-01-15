// src/hooks/useToastNotifications.ts
import { useToast } from '../context/ToastContext';

const useToastNotifications = () => {
  const { showToast } = useToast();

  return {
    showToast,
  };
};

export default useToastNotifications;
