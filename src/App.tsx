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
          <Option key={'11'} value={123}>
            123
          </Option>
          <Option key={'12'} value={123}>
            123
          </Option>
          <Option key={'13'} value={123}>
            123
          </Option>
          <Option key={'14'} value={123}>
            123
          </Option>
          <Option key={'15'} value={123}>
            123
          </Option>
          <Option key={'16'} value={123}>
            123
          </Option>
        </Select>
      </div>
    </>
  );
}

export default App;
