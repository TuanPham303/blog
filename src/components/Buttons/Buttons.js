import React, { Component, Fragment } from 'react';
import { RichUtils } from 'draft-js';

const EdittingIcon = (props) => {
  const handleOnClick = () => {
    props.handleEdittingButtonClick(props.name)
  }

  return (
    <button type="button" onClick={handleOnClick}>
      {props.name}
    </button>
  );
};

EdittingIcon.propTypes = {
  name: PropTypes.string,
};

EdittingIcon.defaultProps = {
  name: '',
};

export default EdittingIcon;
