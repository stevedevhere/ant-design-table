import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import uuid from 'uuid';
import styles from './styles';

const Td = styled('td')(styles.tdStyles);
const Tr = styled('tr')(styles.trStyles);
const Container = styled('div')(styles.ContainerStyles);
const TableContainer = styled('table')(styles.tableStyle);
const MainContainer = styled('div')(styles.mainContainerStyle);

export default class Table extends React.Component {
  getFixedDataByDirection(direction) {
    const columns = this.props.columns.filter(column => column.fixed === direction);

    const data = this.props.dataSource.map((item) => {
      const result = {};
      for (let i = 0; i < columns.length; i++) { // eslint-disable-line no-plusplus
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
            {columns.map(item => (
              <th
                key={uuid.v4()}
                className={css`width: ${item.width}px`}
              >
                {item.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {this.renderItems(data, columns)}
        </tbody>
      </TableContainer>
    );
  }

  renderItems(data, columns) {
    if (data && columns) {
      return data.map(item => (
        <Tr key={uuid.v4()}>
          { columns.map(column => (
            <Td
              key={uuid.v4()}
              fixed={!!column.fixed}
            >
              {
                !column.render
                  ? item[column.dataIndex]
                  : column.render()
              }
            </Td>
        )) }
        </Tr>
      ));
    } else { // eslint-disable-line
      return this.props.dataSource.map(item => (
        <Tr key={uuid.v4()}>
          {this.props.columns.map(column => (
            <Td
              key={uuid.v4()}
              fixed={!!column.fixed}
              width={column.width}
            >
              { !column.render
                  ? item[column.dataIndex]
                  : column.render()
              }
            </Td>
            ))}
        </Tr>
      ));
    }
  }

  render() {
    const { columns } = this.props;

    return (
      <Container width={this.props.wrapperWidth}>
        <MainContainer>
          <TableContainer>
            <thead>
              <tr className={styles.headerStyles}>
                {columns.map(item => <th key={uuid.v4()}>{item.title}</th>)}
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

Table.propTypes = {
  wrapperWidth: PropTypes.string,
  columns: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  dataSource: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types

};

Table.defaultProps = {
  wrapperWidth: undefined,
};
