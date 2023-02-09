import {
  ChangeEvent,
  createContext,
  FC,
  Provider,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";
import useFetchByCategrory from "../hooks/useFetchByCategrory";
import useFetchBySearch from "../hooks/useFetchBySearch";
import { IContext, singleFood } from "../types";

type AppProviderProps = {
  children?: ReactElement;
};

const AppContext = createContext({} as IContext);
export const AppProvider: FC<AppProviderProps> = ({
  children,
}): ReactElement => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const [category, setCategory] = useState<"all" | string>("all");
  const [mainFoodItems, setMainFoodItems] = useState<singleFood[]>([]);
  const [searchParam, setSearchParam] = useState<string>("");
  // param is to be used when the request is to be made.
  const [param, setParam] = useState<string>("a");

  const { data: foodCategory, status: categoryStatus } =
    useFetchByCategrory(category);
  const { data: foodSearch, status: searchStatus } = useFetchBySearch(param);

  const closeNavbar = (): void => {
    setNavbarOpen(false);
  };
  const openNavbar = (): void => {
    setNavbarOpen(true);
  };
  const selectCategory = (category: string): void => {
    setCategory(category);
  };
  const updateSearch = (evt: ChangeEvent<HTMLInputElement>): void => {
    setSearchParam(evt.target.value);
  };
  const clearSearch = () => {
    setSearchParam("");
  };
  const searchFoodItems = (evt: ChangeEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    if (searchParam !== "") {
      setParam(searchParam);
    }
  };

  useEffect(() => {
    if (categoryStatus === "success") {
      setMainFoodItems(foodCategory);
    }
  }, [category, categoryStatus]);
  useEffect(() => {
    console.log(foodSearch, searchStatus);
    if (searchStatus === "success") {
      setMainFoodItems(foodSearch);
    }
  }, [param, searchStatus]);

  return (
    <AppContext.Provider
      value={{
        navbarOpen,
        openNavbar,
        closeNavbar,
        category,
        selectCategory,
        mainFoodItems,
        searchParam,
        clearSearch,
        updateSearch,
        searchFoodItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = (): IContext => useContext(AppContext);
