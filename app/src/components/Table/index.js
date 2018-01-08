import React from 'react';
import styled, {css} from 'react-emotion';


import { columns } from '../../constants/data';


const tableStyle = props => css`
  width: 650px;
  margin: 25px;
  border-collapse: collapse;
  font-family: Tahoma, Arial;
  ${props.fixed ? `
    position: relative;
    td {
      min-width: 100px;
    }
  ` : ''}

`

const tdStyles = props => css`
  text-align: left;
  padding: 10px; 
  ${props.fixed ? 'color: red;' : ''}
`;

const trStyles = props => css`
  &:nth-child(even) {
    background: lightblue;
  }

  a {
    text-decoration: none;
  }

`;

const headerStyles = css`
  background: lightgreen;
  text-align: left;
  th {
    padding: 10px;
  }
`;


const Td = styled('td')(tdStyles);
const Tr = styled('tr')(trStyles);
const TableContainer = styled('table')(tableStyle);

export default class Table extends React.Component {

  renderItems() {
    return this.props.dataSource.map(item => {
      return (
        <Tr key={item.key}>
          {this.props.columns.map((column, index) => {
            return (
              <Td key={column.dataIndex} fixed={!!column.fixed}>{
                item[column.dataIndex]
                  ? item[column.dataIndex]
                  : column.render()
              }</Td>
            )
          })}
        </Tr>
      )
    })
  }

  render() {
    const { columns } = this.props;
    console.log(columns);
    return (
      <TableContainer fixed={!!columns.find(item => item.fixed)}>
        <thead>
          <tr className={headerStyles}>
            {columns.map((item, index) => <th key={item.key}>{item.title}</th>)}
          </tr>
        </thead>
        <tbody>
          {this.renderItems()}
        </tbody>
      </TableContainer>
    );
  }
}