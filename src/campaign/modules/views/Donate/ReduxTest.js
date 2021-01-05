import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';

const Counter = (props) => (
  <div>
    <h2>
      Counter:
      {props.number}
    </h2>
    <input type="button" value="add" onClick={props.add} />
    <input type="button" value="subtract" onClick={props.subtract} />
  </div>
);

// // Actions Type
// const ADD_NUMBER = 'add_number';
// const SUBTRACT_NUMBER = 'subtract_number';
// // Actions
// const addAction = () => ({
//   type: ADD_NUMBER,
//   payload: 1,
// });
// const subtractAction = () => ({
//   type: SUBTRACT_NUMBER,
//   payload: 2,
// });

// // Reducers
// const mathReducer = (state = { number: 0 }, action) => {
//   if (action.type === ADD_NUMBER) {
//     return { ...state, number: state.number + action.payload };
//   }
//   if (action.type === SUBTRACT_NUMBER) {
//     return { ...state, number: state.number - action.payload };
//   }
//   return state;
// };
// // Root Reducers
// const rootReducer = combineReducers({
//   math: mathReducer,
// });

// // Store
// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// // mapStateToProps
// const mapStateToProps = ((state) => {
//   return {
//     number: state.math.number,
//   };
// });
// // mapDispatchToProps
// const mapDispatchToProps = (dispatch) => ({
//   add: () => dispatch(addAction()),
//   subtract: () => dispatch(subtractAction()),
// });

// const ContainerCounter = connect(mapStateToProps, mapDispatchToProps);
// const ConnectedCounter = ContainerCounter(Counter);
const ReduxTest = () => (
  // <Provider store={store}>
    // <ConnectedCounter />
  // </Provider>
  <Counter />
);
export default ReduxTest;
