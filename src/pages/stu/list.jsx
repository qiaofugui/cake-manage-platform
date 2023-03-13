import React, { useEffect, useState } from 'react';
import { Table, Space, Button, Popconfirm, message } from 'antd';
import { stuGet, stuDel } from '@/api/stu';

export default function StuList() {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    stuGet().then((res) => {
      setDataSource(res.data);
    });
  }, []);

  const handleOk = (id) => {
    stuDel(id).then((res) => {
      if (res.code !== 200) return message.error(res.msg);
      setDataSource(res.data);
      message.success(res.msg);
    });
  };

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
          <Popconfirm title="确定删除？" onConfirm={() => handleOk(h.id)}>
            <Button type="primary" size="small" danger>
              删除
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={dataSource} rowKey="id" />
    </div>
  );
}
