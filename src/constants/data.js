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

export const columnsWithFixed = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  }, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    fixed: 'left',
  }, {
    title: 'Address1',
    dataIndex: 'address1',
    key: 'address1',
    width: 150,
  }, {
    title: 'Address2',
    dataIndex: 'address2',
    key: 'address2',
    width: 150,
  }, {
    title: 'Address3',
    dataIndex: 'address3',
    key: 'address3',
    width: 150,
  }, {
    title: 'Address4',
    dataIndex: 'address4',
    key: 'address4',
    width: 150,
  }, {
    title: 'Address5',
    dataIndex: 'address5',
    key: 'address5',
    width: 150,
  }, {
    title: 'Action',
    key: 'operation',
    width: 100,
    fixed: 'right',
    render: () => <a href="#/">action</a>,
  },
];


export const dataSourceWithFixed = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address1: '10 Downiwng Street',
    address2: '10 Dowwning Street',
    address3: '10 Downiwng Street',
    address4: '10 Downing Street',
    address5: '10 Downing Strewet',
  }, {
    key: '2',
    name: 'John',
    age: 42,
    address1: '10 Downing Street',
    address2: '10 Downing Street',
    address3: '10 Downing Street',
    address4: '10 Downing Street',
    address5: '10 Downing Street',
  },{
    key: '3',
    name: 'Mike',
    age: 32,
    address1: '10 Downing Street',
    address2: '10 Downing Street',
    address3: '10 Downing Street',
    address4: '10 Downing Street',
    address5: '10 Downing Street',
  }, {
    key: '4',
    name: 'John',
    age: 42,
    address1: '10 Downing Street',
    address2: '10 Downing Street',
    address3: '10 Downing Street',
    address4: '10 Downing Street',
    address5: '10 Downing Street',
  },{
    key: '5',
    name: 'Mike',
    age: 32,
    address1: '10 Downing Street',
    address2: '10 Downing Street',
    address3: '10 Downing Street',
    address4: '10 Downing Street',
    address5: '10 Downing Street',
  }, {
    key: '6',
    name: 'John',
    age: 42,
    address1: '10 Downing Street',
    address2: '10 Downing Street',
    address3: '10 Downing Street',
    address4: '10 Downing Street',
    address5: '10 Downing Street',
  },{
    key: '7',
    name: 'Mike',
    age: 32,
    address1: '10 Downing Street',
    address2: '10 Downing Street',
    address3: '10 Downing Street',
    address4: '10 Downing Street',
    address5: '10 Downing Street',
  }, {
    key: '8',
    name: 'John',
    age: 42,
    address1: '10 Downing Street',
    address2: '10 Downing Street',
    address3: '10 Downing Street',
    address4: '10 Downing Street',
    address5: '10 Downing Street',
  },
];

export const columns = [
  {
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
    width: 150,
  },
  {
    title: 'Action',
    key: 'operation',
    render: () => <a href="#/">action</a>,
  },
];
