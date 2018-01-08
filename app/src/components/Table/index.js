import React from 'react';
import PropTypes from 'prop-types';
import RcTable from 'rc-table';
export default class Table extends React.Component {

  static propTypes = {
    dataSource: PropTypes.array.isRequired,
    columns: PropTypes.arrayOf({
      title: PropTypes.string.isRequired,
      dataIndex: PropTypes.string.isRequired,
    }).isRequired,
  }

  render() {
    const {
      dataSource,
      columns,
    } = this.props;

    return (
      <RcTable
        data={dataSource}
        columns={columns}
      />
    );
  }
}