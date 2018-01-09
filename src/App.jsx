import React from 'react';
import { injectGlobal } from 'emotion';
import styled from 'react-emotion';

import Table from './components/Table';
import { columnsWithFixed, dataSourceWithFixed } from './constants/data';

// eslint-disable-next-line
injectGlobal`
  body {
    margin: 0;
    padding: 0;
  }
`;

const Wrapper = styled('div')`
  margin: 7% auto;
  display: table;
`;

const App = props => ( // eslint-disable-line
  <Wrapper>
    <Table
      dataSource={dataSourceWithFixed}
      columns={columnsWithFixed}
      wrapperWidth="700px"
    />
  </Wrapper>
);

export default App;
