import React from 'react';
import styled, {css} from 'react-emotion';
import uuid from 'uuid';
import styles from './styles';
import {findDOMNode} from 'react-dom';

const Td = styled('td')(styles.tdStyles);
const Tr = styled('tr')(styles.trStyles);
const Container = styled('div')(styles.ContainerStyles);
const TableContainer = styled('table')(styles.tableStyle);
const MainContainer = styled('div')(styles.mainContainerStyle);

export default class Table extends React.Component {

  renderItems(data, columns) {
    if(data && columns) {
      return data.map((item, index) => {
        return (
          <Tr key={uuid.v4()}>
            { columns.map((column, index) => <Td key={uuid.v4()}>
              {
                !column.render
                  ? item[column.dataIndex]
                  : column.render()
              }
            </Td>) }
          </Tr>
          )
        }
      )
    } else {
      return this.props.dataSource.map((item, index) => {
        return (
          <Tr key={uuid.v4()}>
            {this.props.columns.map((column, index) => {
              return (
                <Td key={uuid.v4()} fixed={!!column.fixed} width={column.width}>{
                  !column.render
                    ? item[column.dataIndex]
                    : column.render()
                }</Td>
              )
            })}
          </Tr>
        )
      })
    }
  }

  getFixedDataByDirection(direction) {
    this.count++;

    const columns = this.props.columns.filter(column => column.fixed === direction);

    const data = this.props.dataSource.map((item, index) => {
      const result = {};
      for (let i = 0; i < columns.length; i++) {
        if (columns[i].render) {
          result.render = columns[i].render;          
        } else {
          result[columns[i].key] = item[columns[i].key];
        }
      }
      return result;
    });

    return (
      <TableContainer fixed={direction}>
        <thead>
          <tr className={styles.headerStyles}>
            {columns.map((item, index) => (
              <th key={uuid.v4()}
                className={css`width: ${item.width}px`}>
                {item.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {this.renderItems(data, columns)}
        </tbody>
      </TableContainer>
    )
  }

  render() {
    const { columns } = this.props;
   
    return (
      <Container width={this.props.wrapperWidth}>
          <MainContainer>
            <TableContainer>
              <thead>
                <tr className={styles.headerStyles}>
                  {columns.map((item, index) => <th key={uuid.v4()}>{item.title}</th>)}
                </tr>
              </thead>
              <tbody>
                {this.renderItems()}
              </tbody>
            </TableContainer>
          </MainContainer>

        {this.getFixedDataByDirection('left')}
        {this.getFixedDataByDirection('right')}

      </Container>
    );
  }
}