import React from 'react';
import Table from './components/Table';
import { dataSource, columns, columnsWithFixed, dataSourceWithFixed } from './constants/data';
import {injectGlobal} from 'emotion';
injectGlobal`
  body {
    margin: 0;
    padding: 0;
  }
`

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Table dataSource={dataSourceWithFixed} columns={columnsWithFixed} />
      </div>
    );
  }
}

export default App;
