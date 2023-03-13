import React, { useEffect, useState } from 'react';
import { Table, Space, Button, Popconfirm, message } from 'antd';
import { stuGet, stuDel } from '@/api/stu';
import { useRequest } from 'umi';

export default function StuList() {
  // const [data, setData] = useState([]);

  useEffect(() => {
    // 方法1：需要开发中自行处理 loading 请求交互效果
    // 开启 loading
    // stuGet().then((res) => {
    //   setData(res.results);
    //   // 关闭 loading
    // });
  }, []);
  // 方法2：使用 useRequest 简化异步请求交互效果
  // data: 请求返回的数据  // 默认情况下格式把必须是 {data: []}
  // loading: 异步请求状态
  // error: 异步请求失败返回的结果
  // let { data, loading, error } = useRequest(async () => {
  //   let res = await stuGet()
  //   return { data: res.results }
  // })
  // 方法3：简化 useRequest 简
  let { data, loading, error } = useRequest(stuGet);

  // 删除
  const handleOk = (id) => {
    stuDel(id).then((res) => {
      if (res.code !== 200) return message.error(res.msg);
      setData(res.results);
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
      <Table
        columns={columns}
        dataSource={data}
        rowKey="objectId"
        loading={loading}
      />
    </div>
  );
}
