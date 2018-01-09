import React from 'react';
import {injectGlobal} from 'emotion';
import styled from 'react-emotion';

import Table from './components/Table';
import { columnsWithFixed, dataSourceWithFixed } from './constants/data';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
  }
`;

const Wrapper = styled('div')`
  margin: 7% auto;
  display: table;

`

class App extends React.Component {
  render() {
    return (
        <Wrapper>
          <Table
            dataSource={dataSourceWithFixed}
            columns={columnsWithFixed}
            wrapperWidth="700px"/>
        </Wrapper>
    );
  }
}

export default App;
