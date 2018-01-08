import React from 'react';
import Table from './components/Table';
import { dataSource, columns } from './constants/data';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Table dataSource={dataSource} columns={columns} />
      </div>
    );
  }
}

export default App;
