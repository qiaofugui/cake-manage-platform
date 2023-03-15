import React, { useState } from 'react';
import { Button, Form, Space, Spin, message, Select } from 'antd';
import { cateGet, goodsAdd, goodsExchange } from '@/api/coke';
import { useRequest } from 'umi';
import MyEditor from './MyEdit';
import axios from 'axios';

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 20,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 10,
    span: 14,
  },
};
export default function GoodsPub(props) {
  const [form] = Form.useForm();
  const [data1, setData] = useState([]);
  let { data, loading, error } = useRequest(() =>
    cateGet().then((res) => {
      let data = [];
      res.data.forEach((item) => {
        data.push({
          value: item.catename,
          lable: item.catename,
        });
      });
      setData(data);
    }),
  );
  console.log();
  const onFinish = (values) => {
    goodsAdd(values).then((res) => {
      message.success('添加成功');
      props.history.push('/goods/list');
    });
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
            maxWidth: 1500,
          }}
        >
          <Form.Item
            name="cateid"
            label="分类选择"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              placeholder="请选择分类"
              // onChange={handleChange}
              options={data1}
            />
          </Form.Item>
          <Form.Item
            name="catedetail"
            label="商品详情"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <MyEditor />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Space>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
              <Button type="button" onClick={onReset}>
                重置
              </Button>
              <Button
                type="dashed"
                danger
                onClick={() => {
                  axios(
                    'https://h5.mcake.com/api/0434b49d1ac28f9d?cityId=110&page=2&bid=1',
                    {
                      method: 'GET',
                      headers: {
                        'access-token': 'e3f0e8ee787a7e46a32337909590241b',
                        version: 'v1.0',
                      },
                    },
                  ).then((res) => {
                    goodsExchange(res.data.data.list, data1);
                  });
                }}
              >
                批量转存
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Spin>
    </div>
  );
}
