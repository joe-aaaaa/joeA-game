'use client';
import { createContext, useContext, useState } from 'react';

const ErrorContext = createContext();

export function ErrorProvider({ children }) {
  const [errorCount, setErrorCount] = useState(0);
  const [errorMarks, setErrorMarks] = useState([]); // ❌ 位置信息

  const incrementError = (pos) => {
    setErrorCount((prev) => prev + 1);
    if (pos && errorMarks.length < 2) {
      setErrorMarks((prev) => [...prev, pos]); // 儲存錯誤點（前兩次）
    }
  };

  const resetError = () => {
    setErrorCount(0);
    setErrorMarks([]);
  };

  return (
    <ErrorContext.Provider value={{ errorCount, incrementError, resetError, errorMarks }}>
      {children}
    </ErrorContext.Provider>
  );
}

export function useError() {
  return useContext(ErrorContext);
}
