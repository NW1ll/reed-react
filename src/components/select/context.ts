import { createContext } from 'react';

const SelectContext = createContext<{
  value: string | number;
  setValue: (value) => void;
}>({
  value: '',
  setValue: () => 0
});
export default SelectContext;
