import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from 'actions/UserDashboardActions';

const UserDashboardContainer = (component) => connect(
  (state) => ({ userDashboardState: state.UserDashboardReducer }),
  (dispatch) => ({ userDashboardActions: bindActionCreators(actions, dispatch) })
)(component);

export default UserDashboardContainer;
