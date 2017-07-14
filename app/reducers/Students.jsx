import axios from 'axios';
//Action Types

const GET_STUDENTS = "GET_STUDENTS";
const GET_STUDENT = "GET_STUDENT";
const DELETE_STUDENT = "DELETE_STUDENT";
const EDIT_STUDENT = "EDIT_STUDENT"

//ACTION CREATORS

export function getStudents(students){
    const action = {
        type: GET_STUDENTS,
        students
    };
    return action;
}

export function getStudent(student){
    const action = {
        type: GET_STUDENT,
        student
    };
    return action;
}

export function deleteStudent(studentId){
    const action = {
        type: DELETE_STUDENT,
        studentId
    };
    return action;
}

export function editStudent(student, studentId){
    console.log('U KNOW WHO', student)
    const action = {
        type: EDIT_STUDENT,
        student,
        studentId
    }
    return action
}

//THUNK CREATORS

export function fetchStudents() {
    
    return function thunk(dispatch){
        return axios.get('/api/students')
        .then(res => res.data)
        .then(students =>{
            const action = getStudents(students);
            dispatch(action);
        });
    }
}

export function postStudent(student) {
    console.log('GOT HERE')
    return function thunk(dispatch){
        return axios.post('/api/student', student)
        .then(newStudent => {
            console.log('newStudent', newStudent)
            const action = getStudent(newStudent);
            dispatch(action);
        })
        .catch(console.error)
    }
}

export function putStudent(student, studentid) {
    console.log('GOT HERE', studentid)
    return function thunk(dispatch){
        return axios.put('/api/student/' + studentid.toString(), student)
        .then(updatedStudent => {
            console.log('updatedStudent', updatedStudent)
            const action = editStudent(updatedStudent, studentid);
            dispatch(action);
        })
        .catch(console.error)
    }
}

export function thunkDeleteStudent(studentid) {
    console.log('IN THUNK', studentid);
    return function thunk(dispatch){
        return axios.delete('/api/student/' + studentid.toString())
        .then(() => {
            const action = deleteStudent(studentid);
            dispatch(action);
        });
    }
}

//REDCUER

export default function reducer (state = [], action){
    switch (action.type){
        
        case GET_STUDENTS:
            return action.students
        
        case GET_STUDENT:
            return [...state, action.student]

        case DELETE_STUDENT:
            return state.filter(function(student) {
                return student.id !== action.studentId;
            })
        case EDIT_STUDENT:
            const newState = state.map(function(element, index){
                //console.log(action.student)
                if (element.id === action.studentId){
                    return action.student
                }
                return state[index]
            })
            
            return newState


        default:
            return state;
    }
}