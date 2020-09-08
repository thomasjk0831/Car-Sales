import React from 'react';
import { connect } from 'react-redux'
import { removeFeature } from '../action/featureAction'

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => props.removeFeature(props.feature)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

function mapStateToProps(state){
  return {
    features : state.car.features
  }
}
export default connect(mapStateToProps,{removeFeature})(AddedFeature);
