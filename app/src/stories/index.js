import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import Table from '../components/Table';
import { dataSource, dataSourceWithFixed, columns, columnsWithFixed} from '../constants/data';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Table', module)
  .add('Default', () => <Table dataSource={dataSource} columns={columns} />)
  .add('With fixed columns', () => <Table dataSource={dataSourceWithFixed} columns={columnsWithFixed} />);


