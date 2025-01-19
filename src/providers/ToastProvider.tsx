import React, { ReactNode, useEffect, useState } from 'react';
import toastManager from '../utils/ToastManager';
import { Toast } from '../components/Toast';

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toast, setToast] = useState<{ type: "success" | "error" | "warning" | "info", message: string, description: string } | null>(null);

  // Sync state with ToastManager
  useEffect(() => {
    const interval = setInterval(() => {
      const currentToast = toastManager.getToast();
      if (currentToast && currentToast !== toast) {
        setToast(currentToast);
      }
    }, 100); 

    return () => clearInterval(interval);
  }, [toast]);

  return (
    <>
      {toast && (
        <div className="fixed top-0 left-1/2 -translate-x-1/2 flex items-center justify-center w-full z-[999999]">
          <Toast
            type={toast.type}
            message={toast.message}
            description={toast.description}
          />
        </div>
      )}
      {children}
    </>
  );
};
