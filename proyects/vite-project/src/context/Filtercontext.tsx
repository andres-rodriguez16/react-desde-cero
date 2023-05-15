import React, { createContext, useState } from 'react';

interface Filters {
  category: string;
  minPrice: number;
}

interface FiltersContextProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

const defaultFilters: Filters = {
  category: 'all',
  minPrice: 40,
};

export const FiltersContext = createContext<FiltersContextProps | undefined>(undefined);


export const FiltersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [filters, setFilters] = useState<Filters>(defaultFilters);

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
};
