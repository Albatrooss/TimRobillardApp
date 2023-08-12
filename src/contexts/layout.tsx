import { createContext, useContext, useState } from 'react';
import type { Colors } from '../utils';

export type LayoutContext = {
  statusBarColor: Colors;
  setStatusBarColor: (color: Colors) => void;
};

const layoutContext = createContext<LayoutContext>({
  statusBarColor: 'orange',
  setStatusBarColor: () => {},
});

export const useLayoutContext = () => useContext(layoutContext);

const LayoutContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [statusBarColor, setStatusBarColor] = useState<Colors>('orange');

  return (
    <layoutContext.Provider
      value={{
        statusBarColor,
        setStatusBarColor,
      }}>
      {children}
    </layoutContext.Provider>
  );
};

export default LayoutContextProvider;
