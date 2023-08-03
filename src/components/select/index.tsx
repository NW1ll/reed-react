import styles from '../select/styles/index.module.less';
import { IconDown, IconUp } from '@arco-design/web-react/icon';
import { useMemo, useState, useContext, useEffect } from 'react';
import SelectContext from './context';
import option from './option';
import React from 'react';

function Select(props: { placeholder: string; disabled?: boolean; children?: React.ReactNode }) {
  const { placeholder, disabled, children } = props;
  const [isClick, setIsClick] = useState(false);
  const [value, setValue] = useState('');
  const inputClass = isClick ? styles['input'] + ' ' + styles['active'] : styles['input'];
  const menuClass = isClick ? styles['menu'] + ' ' + styles['appear'] : styles['menu'];

  const handleClick = () => {
    setIsClick(!isClick);
  };

  const handleBlur = () => {
    setIsClick(false);
  };

  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  const context = useMemo(() => {
    return { value, setValue };
  }, [value, setValue]);

  return (
    <>
      <div className={styles['main']}>
        <div className={styles['wrapper']} onClick={handleClick} onBlur={handleBlur}>
          <input className={inputClass} placeholder={placeholder} value={value} onChange={handleOnChange}></input>
          <div className={styles['icon']}>{isClick ? <IconUp style={{ strokeWidth: 2 }} /> : <IconDown style={{ strokeWidth: 2 }} />}</div>
        </div>
        <div className={menuClass}>
          <SelectContext.Provider value={context}>{children}</SelectContext.Provider>
        </div>
      </div>
    </>
  );
}
Select.option = option;
export default Select;
