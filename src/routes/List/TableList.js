import React from 'react';
import { connect } from 'dva';

import { Table } from 'antd';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  filters: [{
    text: 'Joe',
    value: 'Joe',
  }, {
    text: 'Jim',
    value: 'Jim',
  }, {
    text: 'Submenu',
    value: 'Submenu',
    children: [{
      text: 'Green',
      value: 'Green',
    }, {
      text: 'Black',
      value: 'Black',
    }],
  }],
  // specify the condition of filtering result
  // here is that finding the name started with `value`
  onFilter: (value, record) => record.name.indexOf(value) === 0,
  sorter: (a, b) => a.name.length - b.name.length,
}, {
  title: 'Age',
  dataIndex: 'age',
  defaultSortOrder: 'descend',
  sorter: (a, b) => a.age - b.age,
}, {
  title: 'Address',
  dataIndex: 'address',
  filters: [{
    text: 'London',
    value: 'London',
  }, {
    text: 'New York',
    value: 'New York',
  }],
  filterMultiple: false,
  onFilter: (value, record) => record.address.indexOf(value) === 0,
  sorter: (a, b) => a.address.length - b.address.length,
}];

function onChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}

@connect(({ list, loading }) => ({
  list,
  loading: loading.models.list
}))
export default class TableList extends React.PureComponent {
  componentDidMount() {
    this.props.dispatch({
      type: 'list/fetch'
    })
  }
  render() {
    const { list: { list }, loading } = this.props;
    return (
      <Table columns={columns} dataSource={list} onChange={onChange} loading={loading}/>
    );
  }
}
