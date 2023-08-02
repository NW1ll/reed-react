import React, { useState } from 'react';
import styles from './styles/options.module.less';
import './styles/options.module.less';

export default function Option(props: { children: React.ReactNode; disabled?: boolean; value?: number }) {
  const { children, disabled, value } = props;
  console.log(styles);
  return (
    <>
      <div className={styles['option']}>{children}</div>
    </>
  );
}
