import React, { Component } from 'react';
//import store from '../store';
import {connect} from 'react-redux'
import dumbStudents from './dumbStudents'
import {thunkDeleteStudent} from '../reducers/Students'

//console.log('SMARRT', dumbStudents);


const mapStateToProps = function(state) {
    return {
        students: state.students,
        campuses: state.campuses
    }
}

const mapDispatchToProps = function(dispatch, ownProps){
    return {
        deleteStudent: function(event, studentId){
            event.preventDefault();
            console.log(studentId);
            const action = thunkDeleteStudent(studentId);
            dispatch(action);
            
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(dumbStudents);


