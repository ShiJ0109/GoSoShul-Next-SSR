import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from 'actions/ShulDashboardActions';

const ShulDashboardContainer = (component) => connect(
  (state) => ({ shulDashboardState: state.ShulDashboardReducer }),
  (dispatch) => ({ shulDashboardActions: bindActionCreators(actions, dispatch) })
)(component);

export default ShulDashboardContainer;
