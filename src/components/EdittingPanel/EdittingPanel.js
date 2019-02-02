import React, { Component } from 'react';
import { EdittingButton } from '../../components';

import { edittingOptions } from '../../constants';

class EdittingPanel extends Component {

  renderEdittingIcon = () => edittingOptions.defaultOptions.map(icon => (
    <EdittingButton
      name={icon}
      handleEdittingButtonClick={this.props.handleEdittingButtonClick}
    />
  ))

  render() {
    return (
      <div>
        {this.renderEdittingIcon()}
      </div>
    );
  }
}

export default EdittingPanel;
