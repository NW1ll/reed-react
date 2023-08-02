import styles from '../select/styles/index.module.less';
import { IconDown, IconUp } from '@arco-design/web-react/icon';
import { useState } from 'react';
import option from './option';
import React from 'react';

function Select(props: { placeholder: string; disabled?: boolean; children?: React.ReactNode }) {
  const { placeholder, disabled, children } = props;
  const [isClick, setIsClick] = useState(false);
  const handleClick = () => {
    setIsClick(!isClick);
  };
  const handleBlur = () => {
    setIsClick(false);
  };
  const inputClass = isClick ? styles['input'] + ' ' + styles['active'] : styles['input'];
  const menuClass = isClick ? styles['menu'] + ' ' + styles['appear'] : styles['menu'];
  return (
    <>
      <div className={styles['main']}>
        <div className={styles['wrapper']} onClick={handleClick} onBlur={handleBlur}>
          <input className={inputClass} placeholder={placeholder}></input>
          <div className={styles['icon']}>{isClick ? <IconUp style={{ strokeWidth: 2 }} /> : <IconDown style={{ strokeWidth: 2 }} />}</div>
        </div>
        <div className={menuClass}>{children}</div>
      </div>
    </>
  );
}
Select.option = option;
export default Select;
