import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Toast } from '../components/Toast';

interface ToastData {
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  description: string;
}

interface ToastContextType {
  showToast: (type: 'success' | 'error' | 'warning' | 'info', message: string, description: string) => void;
  setToast: React.Dispatch<React.SetStateAction<ToastData | null>>;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toast, setToast] = useState<ToastData | null>(null);

  const showToast = (type: 'success' | 'error' | 'warning' | 'info', message: string, description: string) => {
    setToast({ type, message, description });

    setTimeout(() => {
      setToast(null);
    }, 5000);
  };

  return (
    <ToastContext.Provider value={{ showToast, setToast }}>
      {toast && (
        <div className="absolute top-0 flex items-center justify-center w-full z-50">
          <Toast type={toast.type} message={toast.message} description={toast.description} />
        </div>
      )}
      {children}
    </ToastContext.Provider>
  );
};
