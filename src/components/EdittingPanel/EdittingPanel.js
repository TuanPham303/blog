import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { EdittingButton } from '..';

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

EdittingPanel.propTypes = {
  handleEdittingButtonClick: PropTypes.func,
};

EdittingPanel.defaultProps = {
  handleEdittingButtonClick: () => undefined,
};

export default EdittingPanel;
