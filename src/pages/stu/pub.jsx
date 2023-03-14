import React from 'react';
import {
  Button,
  Form,
  Input,
  Space,
  Spin,
  message,
  DatePicker,
  InputNumber,
  Cascader,
} from 'antd';
import { stuAdd } from './../../api/stu';
import city from '@/utils/city';
import { useRequest } from 'umi';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
export default function StuPub() {
  const [form] = Form.useForm();
  let { data, loading, error, run } = useRequest(
    (obj) =>
      stuAdd(obj).then((res) => {
        message.success('添加成功');
        onReset();
      }),
    {
      manual: true,
    },
  );

  const onFinish = (values) => {
    let obj = {
      name: values.stuname,
      score: values.stuscore.toString(),
      city: values.stucity.join('-'),
      time: values.stutime._d.toLocaleDateString().replace(/\//g, '-'),
    };
    run(obj);
  };
  const onReset = () => {
    form.resetFields();
  };

  return (
    <div style={{ padding: 20 }}>
      <Spin spinning={loading}>
        <Form
          {...layout}
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
          <Form.Item {...tailLayout}>
            <Space>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
              <Button htmlType="button" onClick={onReset}>
                重置
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Spin>
    </div>
  );
}
