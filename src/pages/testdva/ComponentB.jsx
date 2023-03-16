import React, { Component } from 'react';
import { connect } from 'umi';
import { Button, Space } from 'antd';

class ComponentB extends Component {
  render() {
    return (
      <div>
        ComponentB --- {this.props.count}
        <br />
        <Space>
          <Button
            type="primary"
            onClick={() => this.props.dispatch({ type: 'count/decrement' })}
          >
            - 1
          </Button>
          <Button
            type="primary"
            onClick={() =>
              this.props.dispatch({ type: 'count/decrementStep', payload: 5 })
            }
          >
            - 5
          </Button>
          <Button
            type="primary"
            onClick={() =>
              this.props.dispatch({ type: 'count/decrementAsync' })
            }
          >
            async - 1
          </Button>
        </Space>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};
export default connect(mapStateToProps)(ComponentB);
