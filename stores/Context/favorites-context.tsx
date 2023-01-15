import React, {FC, createContext, useContext, useState} from 'react';

type FavoritesContextObj = {
  favoriteIds: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
};
export const FavoritesContext = createContext<FavoritesContextObj>({
  favoriteIds: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

export const FavoritesContextProvider: FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  const addFavorite = (id: string) => {
    setFavoriteIds(prev => [...prev, id]);
  };

  const removeFavorite = (id: string) => {
    setFavoriteIds(prev => prev.filter(item => item !== id));
  };
  return (
    <FavoritesContext.Provider
      value={{favoriteIds, addFavorite, removeFavorite}}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const value = useContext(FavoritesContext);

  return value;
};
