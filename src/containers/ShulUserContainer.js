import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from 'actions/ShulUserActions';

const ShulUserContainer = (component) => connect(
  (state) => ({ userState: state.ShulUserReducer }),
  (dispatch) => ({ shulUserActions: bindActionCreators(actions, dispatch) })
)(component);

export default ShulUserContainer;
