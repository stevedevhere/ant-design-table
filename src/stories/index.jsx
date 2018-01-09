import React from 'react';

import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import Table from '../components/Table';
import { dataSource, dataSourceWithFixed, columns, columnsWithFixed } from '../constants/data';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Table', module)
  .add('Default', () => <Table dataSource={dataSource} columns={columns} />)
  .add('With fixed columns & withou fixed width', () => <Table dataSource={dataSourceWithFixed} columns={columnsWithFixed} />)
  .add('With fixed columns & fixed width', () => <Table dataSource={dataSourceWithFixed} columns={columnsWithFixed} wrapperWidth="700px" />);
