"use client";

import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import axios from "axios";

export type Item = {
  id: string; // Ensure the id is a string
  title: string;
  image_url: string;
  publisher: string;
  [key: string]: any;
};

type SearchContextProps = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  fetchData: () => Promise<Item[]>;
  items: Item[] | null;
  setItems: Dispatch<SetStateAction<Item[] | null>>;
  favItems: Item[] | null;
  setFavItems: (item: Item) => void;
};

const SearchContext = createContext<SearchContextProps>({
  search: "",
  setSearch: () => {},
  fetchData: async () => [],
  items: null,
  setItems: () => {},
  favItems: null,
  setFavItems: () => {},
});

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState<string>("");
  const [items, setItems] = useState<Item[] | null>(null);
  const [favItems, setFavItems] = useState<Item[] | null>(null);

  useEffect(() => {
    const storedFavItems = localStorage.getItem("favItems");
    if (storedFavItems) {
      setFavItems(JSON.parse(storedFavItems));
    }
  }, []);

  useEffect(() => {
    if (favItems) {
      localStorage.setItem("favItems", JSON.stringify(favItems));
    }
  }, [favItems]);

  const fetchData = async (): Promise<Item[]> => {
    try {
      const response = await axios.get(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}&key=1b71cb6f-eba7-4fa0-ae09-fc3259046e13`
      );
      return response.data.data.recipes;
    } catch (e) {
      console.log(e);
      return [];
    }
  };

  const addFavouriteItem = (item: Item) => {
    setFavItems((prevFavItems) => {
      if (prevFavItems) {
        // Check if item already exists
        if (!prevFavItems.some((favItem) => favItem.id === item.id)) {
          return [...prevFavItems, item];
        }
        return prevFavItems;
      } else {
        return [item];
      }
    });
  };

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        fetchData,
        items,
        setItems,
        favItems,
        setFavItems: addFavouriteItem,
      }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, ContextProvider };
