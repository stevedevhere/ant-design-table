import React from 'react';
import Table from './components/Table';
import Stories from './stories';

const dataSource = [{
  key: '1',
  name: 'Mike',
  age: 32,
  address: '10 Downing Street'
}, {
  key: '2',
  name: 'John',
  age: 42,
  address: '10 Downing Street'
}];

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}];



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Fuck you, here Table!</h1>
        <Stories/>
        {/* <Table dataSource={dataSource} columns={columns} /> */}
      </div>
    );
  }
}

export default App;
