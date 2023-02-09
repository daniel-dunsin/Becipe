import {
  createContext,
  FC,
  Provider,
  ReactElement,
  useContext,
  useState,
} from "react";
import { IContext, singleFood } from "../types";

type AppProviderProps = {
  children?: ReactElement;
};

const AppContext = createContext({} as IContext);
export const AppProvider: FC<AppProviderProps> = ({
  children,
}): ReactElement => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const [filteredItem, setFilteredItem] = useState<singleFood[]>([]);
  const [mainFoodItems, setMainFoodItems] = useState<singleFood[]>([]);

  const closeNavbar = (): void => {
    setNavbarOpen(false);
  };
  const openNavbar = (): void => {
    setNavbarOpen(true);
  };
  return (
    <AppContext.Provider value={{ navbarOpen, openNavbar, closeNavbar }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = (): IContext => useContext(AppContext);
