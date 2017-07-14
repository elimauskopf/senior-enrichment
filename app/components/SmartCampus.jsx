import React, { Component } from 'react';
//import store from '../store';
import {connect} from 'react-redux'
import dumbCampus from './DumbCampus'
import {thunkDeleteCampus} from '../reducers/Campus'

console.log('SMARRT', dumbCampus)

const mapStateToProps = function(state) {
    return {
        campuses: state.campuses,
        students: state.students
    }
}

const mapDispatchToProps = function(dispatch, ownProps){
    return {
        deleteCampus: function(event, campusId){
            event.preventDefault();
            console.log(campusId);
            const action = thunkDeleteCampus(campusId);
            dispatch(action);
            
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(dumbCampus)