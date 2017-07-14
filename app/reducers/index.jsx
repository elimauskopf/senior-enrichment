import students from './Students'
import campuses from './Campus'
import {
  combineReducers
} from 'redux';




{/* CREATE ROOT REDUCER FROM STUDENTS AND CAMPUS REDUCERS */}
const rootReducer = combineReducers({students, campuses})


export default rootReducer

