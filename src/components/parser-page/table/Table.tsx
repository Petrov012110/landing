

import { Table, TableColumnsType } from 'antd';



function onChange(pagination: any, filters: any, sorter: any, extra: any) {
  console.log('params', pagination, filters, sorter, extra);
}

export const PostsTable = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Chinese Score',
      dataIndex: 'chinese',
      sorter: {
        compare: (a: { chinese: number; }, b: { chinese: number; }) => a.chinese - b.chinese,
        multiple: 3,
      },
    },
    {
      title: 'Math Score',
      dataIndex: 'math',
      sorter: {
        compare: (a: { math: number; }, b: { math: number; }) => a.math - b.math,
        multiple: 2,
      },
    },
    {
      title: 'English Score',
      dataIndex: 'english',
      sorter: {
        compare: (a: { english: number; }, b: { english: number; }) => a.english - b.english,
        multiple: 1,
      },
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      chinese: 98,
      math: 60,
      english: 70,
    },
    {
      key: '2',
      name: 'Jim Green',
      chinese: 98,
      math: 66,
      english: 89,
    },
    {
      key: '3',
      name: 'Joe Black',
      chinese: 98,
      math: 90,
      english: 70,
    },
    {
      key: '4',
      name: 'Jim Red',
      chinese: 88,
      math: 99,
      english: 89,
    },
  ];
  return (
    <Table
      className="posts_table"
      columns={columns}
      dataSource={data}
      bordered
      rowClassName="post-table-row"
      pagination={{
        position: ['topRight', 'bottomRight']
      }}
    />
  );
};