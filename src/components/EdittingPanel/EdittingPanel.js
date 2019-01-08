import React, { Component } from 'react';
import { EdittingIcon } from '..';

import { edittingFunctions } from '../../constants'

class EdittingPanel extends Component {
  renderEdittingIcon = () => edittingFunctions.inlineCSSEdittingFunction.map(icon => (
    <EdittingIcon
      name={icon}
      handleStyleIconClick={this.props.handleStyleIconClick}
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
