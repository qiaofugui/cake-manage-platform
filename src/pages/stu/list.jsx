import React, { useEffect, useState } from 'react';
import {
  Table,
  Space,
  Button,
  Popconfirm,
  message,
  Form,
  Input,
  InputNumber,
  Cascader,
  DatePicker,
} from 'antd';
import { stuGet, stuDel, stuUpdate } from '@/api/stu';
import { useRequest } from 'umi';
import Edit from './edit';
import city from '@/utils/city';

export default function StuList() {
  const [data1, setData] = useState([]);
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [objectId, setObjectId] = useState(null);

  let { data, loading, error, run } = useRequest(
    () =>
      stuGet().then((res) => {
        setData(res.data);
      }),
    {
      manual: true,
    },
  );

  useEffect(() => {
    run();
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

  // 删除
  const handleOk = (id) => {
    stuDel(id).then((res) => {
      // if (res.code !== 200) return message.error(res.msg);
      run();
      message.success('删除成功');
    });
  };

  // 关闭 Dialog
  const editCancel = () => {
    setIsModalOpen(false);
  };

  // 修改
  const onFinish = (values) => {
    let obj = {
      name: values.stuname,
      score: values.stuscore.toString(),
      city: values.stucity.join('-'),
      time: values.stutime._d.toLocaleDateString().replace(/\//g, '-'),
    };
    stuUpdate(objectId, obj).then((res) => {
      message.success('修改成功');
      setIsModalOpen(false);
      run();
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
          <Button
            type="primary"
            size="small"
            onClick={() => {
              setIsModalOpen(true);
              let obj = {
                stuname: h.name,
                stuscore: h.score,
              };
              form.setFieldsValue(obj);
              setObjectId(h.objectId);
            }}
          >
            编辑
          </Button>
          <Popconfirm title="确定删除？" onConfirm={() => handleOk(h.objectId)}>
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
      <Edit title="编辑学员" isModalOpen={isModalOpen} editCancel={editCancel}>
        <Form
          form={form}
          name="control-hooks"
          onFinish={onFinish}
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item
            name="stuname"
            label="学员姓名"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="stuscore"
            label="学员分数"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber min={0} max={100} />
          </Form.Item>
          <Form.Item
            name="stucity"
            label="学员城市"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Cascader options={city} placeholder="选择城市" />
          </Form.Item>
          <Form.Item
            name="stutime"
            label="学员日期"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 18,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              确认修改
            </Button>
          </Form.Item>
        </Form>
      </Edit>
      <Table
        columns={columns}
        dataSource={data1}
        rowKey="objectId"
        loading={loading}
      />
    </div>
  );
}
