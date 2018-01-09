import React from 'react';
import styled, {css} from 'react-emotion';

const tableStyle = props => css`
  border-collapse: collapse;
  font-family: Tahoma, Arial;
  ${props.fixed ? `
    position: absolute;
    top: 0;
    ${props.fixed === 'left'
    ? 'left: 0;'
    : props.fixed === 'right'
    ? 'right: 0;' : ''}
  ` : ''}
`

const tdStyles = props => css`
  text-align: left;
  padding: 10px; 
  ${props.width ? `min-width: ${props.width}px` : ''}
  ${props.fixed ? 'color: white; background: red;' : ''}
`;

const trStyles = props => css`
  border-bottom: solid 1px #cecece;
  background: #ececec;

  a {
    text-decoration: none;
  }

  ${props.fixed ? `
    position: absolute;
    top: 0;
    z-index: 999;
    background: red;
    left: 0;
  ` : 'overflow: auto;'} 
`;

const headerStyles = css`
  background: lightgreen;
  text-align: left;
  th {
    padding: 10px;
  }
`;

const Container = styled('div')(props => css`
  ${props.width ? `width: ${props.width}` : 'display: table;'}
  position: relative;
`);

const mainContainerStyle = props => css`
  overflow: auto;
  ${props.width ? `width: ${props.width}` : ''}
`;

const Td = styled('td')(tdStyles);
const Tr = styled('tr')(trStyles);
const TableContainer = styled('table')(tableStyle);
const MainContainer = styled('div')(mainContainerStyle);

export default class Table extends React.Component {
  renderItems() {
    return this.props.dataSource.map(item => {
      return (
        <Tr key={item.key}>
          {this.props.columns.map((column, index) => {
            return (
              <Td key={column.dataIndex} fixed={!!column.fixed} width={column.width}>{
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

  renderFixedItems(data, columns) {
    return data.map(item => {
      const keys = Object.keys(item);
      console.log(data, item, keys);
      return (
        <Tr>
          { columns.map((column, index) => <Td>{
            item[column.dataIndex]
                  ? item[column.dataIndex]
                  : column.render()
          }</Td>) }
        </Tr>
        )
      }
    )
  }

  render() {
    const { columns } = this.props;

    const fixedColumnsLeft = this.props.columns.filter(column => column.fixed === 'left');
    const fixedColumnsRight = this.props.columns.filter(column => column.fixed === 'right');
    const fixedDataLeft = this.props.dataSource.map((item, index) => {
      const result = {};
      for (let i = 0; i < fixedColumnsLeft.length; i++) {
        result[fixedColumnsLeft[i].key] = item[fixedColumnsLeft[i].key] || fixedColumnsLeft[i].render;
      }
      return result;
    });
    
    const fixedDataRight = this.props.dataSource.map((item, index) => {
      const result = {};
      for (let i = 0; i < fixedColumnsRight.length; i++) {
        if (fixedColumnsRight[i].render) {
          result.render = fixedColumnsRight[i].render;          
        } else {
          result[fixedColumnsRight[i].key] = item[fixedColumnsRight[i].key];
        }
      }
      return result;
    });
    console.log('WTF IS GOING HERE? ', fixedDataRight);
    
    return (
      <Container width={this.props.wrapperWidth} fixed={!!columns.find(item => item.fixed)}>
          <MainContainer>
            <TableContainer>
              <thead>
                <tr className={headerStyles}>
                  {columns.map((item, index) => <th key={item.key}>{item.title}</th>)}
                </tr>
              </thead>
              <tbody>
                {this.renderItems()}
              </tbody>
          </TableContainer>
          </MainContainer>

        {fixedDataLeft &&  (
            <TableContainer fixed={'left'}>
              <thead>
                <tr className={headerStyles}>
                  {fixedColumnsLeft.map((item, index) => <th key={item.key}>{item.title}</th>)}
                </tr>
              </thead>
              <tbody>
                {this.renderFixedItems(fixedDataLeft, fixedColumnsLeft)}
              </tbody>
            </TableContainer>
          )
        }

        {fixedDataRight &&  (
            <TableContainer fixed={'right'}>
              <thead>
                <tr className={headerStyles}>
                  {fixedColumnsRight.map((item, index) => (
                    <th key={item.key}
                      className={css`width: ${item.width}px`}>
                      {item.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {this.renderFixedItems(fixedDataRight, fixedColumnsRight)}
              </tbody>
            </TableContainer>
          )
        }
      </Container>
    );
  }
}