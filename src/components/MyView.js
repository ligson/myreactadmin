import React from 'react';

export default class MyView extends React.Component {
  componentDidMount() {
    document.title = this.state.title;
  }

  componentDidUpdate() {
    document.title = this.state.title;
  }

  constructor(props) {
    super(props);
  }
}
