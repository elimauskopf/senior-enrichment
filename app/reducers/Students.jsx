import axios from 'axios';
//Action Types

const GET_STUDENTS = "GET_STUDENTS";
const GET_STUDENT = "GET_STUDENT";
const DELETE_STUDENT = "DELETE_STUDENT";

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
    
    return function thunk(dispatch){
        return axios.post('/api/students', student)
        .then(res => res.data)
        .then(students => {
            const action = getStudents(students);
            dispatch(action);
        });
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
            return [...state, action.students]

        case DELETE_STUDENT:
            return state.filter(function(student) {
                return student.id !== action.studentId;
            })

        default:
            return state;
    }
}