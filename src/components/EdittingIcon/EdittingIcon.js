import React from 'react';
import PropTypes from 'prop-types';

const EdittingIcon = (props) => {
  const handleOnClick = () => {

  };

  return (
    <button type="button" onClick={handleOnClick}>{props.name}</button>
  );
};

EdittingIcon.propTypes = {
  name: PropTypes.string,
};

EdittingIcon.defaultProps = {
  name: '',
};

export default EdittingIcon;
