import axios from 'axios';
//Action Types

const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_CAMPUS = 'GET_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';

//ACTION CREATORS

export function getCampuses(campuses){
    const action = {
        type: GET_CAMPUSES,
        campuses
    };
    return action;
}

export function getCampus(campus){
    const action = {
        type: GET_CAMPUS,
        campus
    };
    return action;
}

export function deleteCampus(campusid){
    const action = {
        type: DELETE_CAMPUS,
        campusid
    };
    return action
}

//THUNK CREATORS

export function fetchCampuses() {
    
    return function thunk(dispatch){
        return axios.get('/api/campuses')
        .then(res => res.data)
        .then(campuses => {
            const action = getCampuses(campuses);
            dispatch(action);
        });
    }
}

export function postCampus(campus) {
    
    return function thunk(dispatch){
        return axios.post('/api/campus', campus)
        .then(res => res.data)
        .then(newCampus => {
            const action = getCampus(newCampus);
            dispatch(action);
        });
    }
}

export function thunkDeleteCampus(campusid) {
    console.log('IN THUNK', campusid);
    return function thunk(dispatch){
        return axios.delete('/api/campus/' + campusid.toString())
        .then(() => {
            const action = deleteCampus(campusid);
            dispatch(action);
        });
    }
}

//REDCUER

export default function reducer (state = [], action){
    switch (action.type){
        
        case GET_CAMPUSES:
            return action.campuses
        
        case GET_CAMPUS:
            return [...state, action.campus]

        case DELETE_CAMPUS:
            return state.filter((campus) =>{
                return campus.id !== action.campusid
            }
            )

        default:
            return state;
    }
}