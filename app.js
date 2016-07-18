/*
* @Author: tengfeisu
* @Date:   2016-07-18 15:27:21
* @Last Modified by:   tengfeisu
* @Last Modified time: 2016-07-18 16:46:59
*/

'use strict';
var React = require('react');
var ReactDOM = require('react-dom');

var Hello = React.createClass({
  render: function render() {
    return <div>Hello {this.props.name}</div>;
  }
});

ReactDOM.render(
  <Hello name="World" />,
  document.getElementById('AppRoot')
);
