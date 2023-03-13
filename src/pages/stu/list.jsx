import React, { useEffect, useState } from 'react';
import { Table, Space, Button } from 'antd';
import { getStuList } from '@/api/stu';

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '分数',
    dataIndex: 'score',
  },
  {
    title: '城市',
    dataIndex: 'city',
  },
  {
    title: '日期',
    dataIndex: 'time',
  },
  {
    title: '操作',
    render: (h) => (
      <Space>
        <Button type="primary" size="small">
          编辑
        </Button>
        <Button type="primary" size="small" danger>
          删除
        </Button>
      </Space>
    ),
  },
];
export default function StuList() {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    getStuList().then((res) => {
      setDataSource(res.data);
    });
  }, []);

  return (
    <div>
      <Table
        columns={columns}
        dataSource={dataSource}
        rowKey={(item) => item.id}
      />
    </div>
  );
}
