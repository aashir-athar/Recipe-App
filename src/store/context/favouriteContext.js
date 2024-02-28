import { createContext, useState } from "react";

export const FavouriteContext = createContext({
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
});

const FavouriteContextProvider = ({ children }) => {
  const [favouriteMealIds, setFavouriteMealIds] = useState([]);

  const addFavourite = (id) => {
    setFavouriteMealIds((prev) => [...prev, id]);
  };

  const removeFavourite = (id) => {
    setFavouriteMealIds((prev) =>
      prev.filter((item) => {
        if (item.id !== id) {
          return false;
        } else {
          return true;
        }
      })
    );
  };

  const value = {
    ids: favouriteMealIds,
    addFavourite: addFavourite,
    removeFavourite: removeFavourite,
  };

  return (
    <FavouriteContext.Provider value={value}>
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteContextProvider;
