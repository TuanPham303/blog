import React from 'react';
import PropTypes from 'prop-types';
// import { RichUtils } from 'draft-js';

const EdittingIcon = (props) => {
  const handleOnClick = () => {
    props.handleEdittingButtonClick(props.name);
  };

  return (
    <button type="button" onClick={handleOnClick}>
      {props.name}
    </button>
  );
};

EdittingIcon.propTypes = {
  name: PropTypes.string,
  handleEdittingButtonClick: PropTypes.func,
};

EdittingIcon.defaultProps = {
  name: '',
  handleEdittingButtonClick: () => undefined,
};

export default EdittingIcon;
