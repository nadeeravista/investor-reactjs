import React, { createContext, useContext, useEffect, useState } from 'react';

interface ToastMessageContextType {
  message: string;
  visible: boolean;
  addToast: (message: string) => void;
  setVisible: (status: boolean) => void;
}

interface ToastMessageProviderProps {
  children: React.ReactNode;
}

const ToastMessageContext = createContext<ToastMessageContextType | undefined>(
  undefined
);

export const ToastMessageProvider = ({
  children,
}: ToastMessageProviderProps) => {
  const [message, addToast] = useState<string>('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!message) return;
    setVisible(true);

    const timer = setTimeout(() => {
      addToast('');
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [message]);

  return (
    <ToastMessageContext.Provider
      value={{ message, addToast, setVisible, visible }}
    >
      <div
        className={`fixed top-5 left-1/2 transform -translate-x-1/2 bg-error text-white text-sm font-medium px-4 py-2 rounded shadow-md transition-opacity duration-300 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {message}
      </div>
      {children}
    </ToastMessageContext.Provider>
  );
};

export const useToastMessage = () => {
  const context = useContext(ToastMessageContext);
  if (!context) {
    throw new Error(
      'useToastMessage must be used within an ToastMessageProvider'
    );
  }
  return context;
};
