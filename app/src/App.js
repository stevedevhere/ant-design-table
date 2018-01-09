import React from 'react';
import {injectGlobal} from 'emotion';
import styled from 'react-emotion';

import Table from './components/Table';
import { dataSource, columns, columnsWithFixed, dataSourceWithFixed } from './constants/data';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
  }
`;

class App extends React.Component {
  render() {
    return (
        <Table
          dataSource={dataSourceWithFixed}
          columns={columnsWithFixed}
          wrapperWidth="700px"/>
    );
  }
}

export default App;
