import React from 'react';
// import PropTypes from 'prop-types';
import classNames from 'classnames';
import RcTable from 'rc-table';
import {cx, css, injectGlobal} from 'react-emotion';



const prefixCls = css`
  padding: 20px;
  position: relative;
  width: 650px;

  &-content {
    overflow: scroll;
  }
  
  &-body {
    table {
      width: 100%;
      text-align: left;
      border-collapse: collapse;
      
      a {
        text-decoration: none;
      }

      tr {
        &:nth-child(even) {
          background-color: #eaeaea;
        }
        td {
          padding: 10px 0;
          border-bottom: solid 1px #eaeaea;
        }
      }
    }
  }
  
  &-fixed-left,
  &-fixed-right { 
    position: absolute;
    top: 17px;
    background: rgba(0,0,0,0.1);
    color: red;
    text-align: left;
    line-height: normal;
  }

  &-fixed-right {
    right: 17px;
  }
  
  &-fixed-left {
    left: 17px;
  }
`;


export default class Table extends React.Component {
  // static propTypes = {
  //   dataSource: PropTypes.array.isRequired,
  //   columns: PropTypes.array.isRequired,
  // }

  render() {
    const {
      dataSource,
      columns,
    } = this.props;
    
    return (
      <RcTable
        key="table"
        data={dataSource}
        columns={columns}
        // rowClassName={tableStyles}
        prefixCls={prefixCls}
        
        // showHeader={showHeader}
        // className={classString}
        // expandIconColumnIndex={expandIconColumnIndex}
        // expandIconAsCell={expandIconAsCell}
        // emptyText={() => locale.emptyText}
      />
    );
  }
}