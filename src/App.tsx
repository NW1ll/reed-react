import { useState } from 'react';


import Select from "./components/select";
import styles from './app.module.less';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <div className={styles['main-page']}>
            <Select ></Select>
        </div>
    </>
  );
}

export default App;
