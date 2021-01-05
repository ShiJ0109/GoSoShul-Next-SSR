import React, { createContext, useState } from "react";

export const LoadingContext = createContext();

// This context provider is passed to ShulLoginForm if state is loading or not.
export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};