import React, { useState, useContext } from 'react';
import SelectContext from '@/components/select/context';
import styles from './styles/options.module.less';
import './styles/options.module.less';

export default function Option(props: { children: React.ReactNode; disabled?: boolean }) {
  const { children, disabled } = props;
  const { value, setValue } = useContext(SelectContext);

  const handleClick = (e) => {
    console.log(e.target.innerText);
    setValue(e.target.innerText);
  };
  return (
    <>
      <div className={styles['option']} onClick={handleClick}>
        {children}
      </div>
    </>
  );
}
