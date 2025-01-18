import React, { ReactNode } from 'react';

interface ToastProviderProps {
    children: ReactNode;
}
declare const ToastProvider: React.FC<ToastProviderProps>;

declare const successToast: (message: string, description: string) => void;
declare const errorToast: (message: string, description: string) => void;
declare const infoToast: (message: string, description: string) => void;
declare const warningToast: (message: string, description: string) => void;

export { ToastProvider, errorToast, infoToast, successToast, warningToast };
