import React, { createContext } from 'react';

const SelectContext = createContext<{
  value: string | number;
  setValue: React.Dispatch<React.SetStateAction<number | string>>;
}>({
  value: '',
  setValue: () => 0
});
export default SelectContext;
