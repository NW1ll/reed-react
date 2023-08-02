import React, { useState } from 'react';
import styles from '../select/styles/options.moudule.less';
import './styles/options.moudule.less';
console.log(styles);

export default function Option(props: { key: string; children: React.ReactNode; disabled?: boolean; value?: number }) {
  const { key, children, disabled, value } = props;
  return (
    <>
      <div key={key} className={'option'}>
        {children}
      </div>
    </>
  );
}
