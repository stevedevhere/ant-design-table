import React from 'react';

export const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street'
  }, {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street'
  },{
    key: '3',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street'
  }, {
    key: '4',
    name: 'John',
    age: 42,
    address: '10 Downing Street'
  },{
    key: '5',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street'
  }, {
    key: '6',
    name: 'John',
    age: 42,
    address: '10 Downing Street'
  },{
    key: '7',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street'
  }, {
    key: '8',
    name: 'John',
    age: 42,
    address: '10 Downing Street'
  },
];

export const columns = [{
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
  },
  {
    title: 'Action',
    key: 'operation',
    width: 100,
    render: () => <a href="#">action</a>,
  },
];
