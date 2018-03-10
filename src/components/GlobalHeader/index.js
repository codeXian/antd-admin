import React, { PureComponent } from 'react';
import HeaderSearch from 'ant-design-pro/lib/HeaderSearch';
import styles from "./index.less";

class GlobalHeader extends PureComponent {
  render() {
    return (
      <div className={styles.header}>
        <HeaderSearch
          placeholder="站内搜索"
          dataSource={['搜索提示一', '搜索提示二', '搜索提示三']}
          onSearch={(value) => {
            console.log('input', value); // eslint-disable-line
          }}
          onPressEnter={(value) => {
            console.log('enter', value); // eslint-disable-line
          }}
        />
      </div>
    );
  }
}

export default GlobalHeader;
