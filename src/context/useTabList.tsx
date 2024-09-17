import { createContext, useContext, useEffect, useState } from "react";

type TabListContextType = {
  onSwitch: (value: string) => void;
  variant: "line" | "solid";
  activeTabValue: string;
};

type TabListProviderType = {
  children: ContextProviderType["children"];
  tabVariant: "line" | "solid";
};

const ListContext = createContext<TabListContextType | undefined>(undefined);

const TabListProvider = ({ children, tabVariant }: TabListProviderType) => {
  const [activeTabValue, setActiveTabValue] = useState("");
  const [variant, setVaraint] =
    useState<TabListContextType["variant"]>(tabVariant);

  useEffect(() => {
    setVaraint(tabVariant);
  }, [tabVariant]);

  useEffect(() => {
    const tab = document.querySelectorAll("button");
    if (!activeTabValue) {
      setActiveTabValue(tab[0].value);
    }
  }, [activeTabValue]);

  function onSwitch(value: string) {
    setActiveTabValue(value);
  }

  return (
    <ListContext.Provider value={{ onSwitch, activeTabValue, variant }}>
      {children}
    </ListContext.Provider>
  );
};

export default TabListProvider;

export const useTabList = () => {
  const context = useContext(ListContext);
  if (context === undefined) {
    throw new Error("TabHandle must be used within TabsList components");
  }
  return context;
};
