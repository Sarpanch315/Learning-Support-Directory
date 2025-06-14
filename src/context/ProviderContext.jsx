import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchProviders } from '../utils/fetchproviders';

const ProviderContext = createContext();

export const useProviderContext = () => useContext(ProviderContext);

export const ProviderContextProvider = ({ children }) => {
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProviders().then(data => {
      setProviders(data);
      setLoading(false);
    });
  }, []);

  return (
    <ProviderContext.Provider value={{ providers, loading }}>
      {children}
    </ProviderContext.Provider>
  );
};
