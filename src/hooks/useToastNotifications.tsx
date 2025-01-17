// src/hooks/useToastNotifications.ts
import { useToast } from '../context/ToastContext';

const useToastNotifications = () => {
  const { showToast } = useToast();

  const successToast = (message: string, description: string) => {
    showToast('success', message, description);
  };

  const errorToast = (message: string, description: string) => {
    showToast('error', message, description);
  };

  const infoToast = (message: string, description: string) => {
    showToast('info', message, description);
  };

  const warningToast = (message: string, description: string) => {
    showToast('warning', message, description);
  };

  return {
    successToast,
    errorToast,
    infoToast,
    warningToast,
  };
};

export default useToastNotifications;
