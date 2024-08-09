import React, { createContext, useState } from "react";

type MenuContextProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleScroll: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

type MenuContextProviderProps = {
  children: React.ReactNode;
};

export const MenuContext = createContext<MenuContextProps | null>(null);

export const MenuContextProvider = ({ children }: MenuContextProviderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const url = new URL(href);
    const targetId = url.hash.substring(1); // Remove the '#' character
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen, handleScroll }}>
      {children}
    </MenuContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useMenuContext = () => {
  const context = React.useContext(MenuContext);
  if (context === null) {
    throw new Error("useMenuContext must be used within a MenuContextProvider");
  }
  return context;
};
