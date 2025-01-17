import React, { ReactNode } from 'react';

interface ToastProviderProps {
    children: ReactNode;
}
declare const ToastProvider: React.FC<ToastProviderProps>;

interface ToastProps {
    type: "success" | "error" | "warning" | "info";
    message: string;
    description?: string;
}
declare const Toast: React.FC<ToastProps>;

declare const useToastNotifications: () => {
    successToast: (message: string, description: string) => void;
    errorToast: (message: string, description: string) => void;
    infoToast: (message: string, description: string) => void;
    warningToast: (message: string, description: string) => void;
};

export { Toast, ToastProvider, useToastNotifications };
