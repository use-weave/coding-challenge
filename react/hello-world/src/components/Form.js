import React, { PropTypes } from 'react';

const Form = ({
  currentItem,
  streamCurrentItem,
  handleSubmit
}) => (
  <form
    className="form"
    onSubmit={(event) => handleSubmit(event, currentItem)}
  >
    <input
      className="pure-input"
      type="text"
      placeholder="enter item"
      onChange={streamCurrentItem}
      value={currentItem}
    />
  </form>
);

Form.propTypes = {
  currentItem: PropTypes.string.isRequired,
  streamCurrentItem: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
