import React from 'react';
import {connect} from 'dva';

class Welcome extends React.Component {
  render() {
    return (
      <h3>欢迎</h3>
    );
  }
}

export default connect()(Welcome);
