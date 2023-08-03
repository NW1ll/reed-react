import { useState } from 'react';
import Select from './components/select';
import styles from './app.module.less';
const Option = Select.option;

function App() {
  const [count, setCount] = useState(0);
  const options = ['Beijing', 'Shanghai', 'Guangzhou', 'Disabled'];
  return (
    <>
      <div className={styles['main-page']}>
        <Select placeholder={'请输入'} disabled={true}>
          <Option>123</Option>
          <Option>456</Option>
          <Option>789</Option>
        </Select>
      </div>
    </>
  );
}

export default App;
