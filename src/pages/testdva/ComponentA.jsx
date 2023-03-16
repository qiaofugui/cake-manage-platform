import React from 'react';
import { connect } from 'umi';
import { Button, Space } from 'antd';

function ComponentA(props) {
  return (
    <div>
      ComponentA --- {props.count}
      <br />
      <Space>
        <Button
          type="primary"
          onClick={() => props.dispatch({ type: 'count/increment' })}
        >
          + 1
        </Button>
        <Button
          type="primary"
          onClick={() =>
            props.dispatch({ type: 'count/incrementStep', payload: 5 })
          }
        >
          + 5
        </Button>
        <Button
          type="primary"
          onClick={() => props.dispatch({ type: 'count/incrementAsync' })}
        >
          async + 1
        </Button>
      </Space>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};
export default connect(mapStateToProps)(ComponentA);
