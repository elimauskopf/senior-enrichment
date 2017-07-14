import React, { Component } from 'react';
//import store from '../store';
import {connect} from 'react-redux'
import NewStudentForm from './NewStudentForm'
import {postStudent, putStudent} from '../reducers/Students'

const mapStateToProps = function(state) {
    return {
        students: state.students,
        campuses: state.campuses
    }
}

const mapDispatchToProps = function(dispatch){
    return {
        addStudent: function(newStudent){
            console.log('ls no')
            const action = postStudent(newStudent)
            dispatch(action)
        },
        updateStudent: function(updatedStudent, updatedStudentId){
            console.log('updated student', updatedStudent,updatedStudentId)
            const action = putStudent(updatedStudent, updatedStudentId)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewStudentForm)