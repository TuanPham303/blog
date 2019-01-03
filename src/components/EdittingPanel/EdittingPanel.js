import React, { Component } from 'react';
import { EdittingIcon } from '../../components';

class EdittingPanel extends Component {
  render() {
    return (
      <div>
        <EdittingIcon/>
        <EdittingIcon/>
        <EdittingIcon/>
        <EdittingIcon/>
      </div>
    );
  }
}

export default EdittingPanel;