import { connect } from 'react-redux';
import { streamCurrentItem, addItemToList } from '../actions/form';
import Form from '../components/Form';

const mapStateToProps = (state) => ({
  currentItem: state.form,
});

const mapDispatchToProps = (dispatch) => ({
  streamCurrentItem: (event) => {
    dispatch(streamCurrentItem(event.target.value));
  },

  handleSubmit: (event, currentItem) => {
    event.preventDefault();
    dispatch(addItemToList(currentItem));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
