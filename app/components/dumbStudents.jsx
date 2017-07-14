import React from 'react';
import {Link} from 'react-router-dom';


export default function(props){
    
       // console.log('IMPORTANT')
        //console.log(props);-0o
        const singleId = +props.singleId;
        const studentList = props.students.filter(function (student) {
        //console.log('STUDENT ID', student.CampusId)
        return student.id === singleId
    })
        return (
            
         <div className ='container'>
             <h2> NAME, EMAIL, CAMPUS </h2>
             { singleId ? (

                <div>{
                
                 studentList.map(student => (
                     
                     <div key={student.id}>
                        <Link to={`/student/${student.id}`}>
                            <p> {student.name + '     '   +  student.email + '    ' + student.Campus.name}</p> 
                        </Link>
                         <button type="button" onClick={(event) => props.deleteStudent(event, student.id)}>Delete</button>
                          <Link to={`/student/${student.id}/form`}>
                             <button type="button">UPDATE</button>
                        </Link>
                     </div>
                 ))
             }</div>
             ) : (
                <div>{
                
                 props.students.map(student => (
                     
                     <div key={student.id}>
                        <Link to={`/student/${student.id}`}>
                            <p> {student.name + '     '   +  student.email + student.Campus.name}</p> 
                        </Link>
                         <button type="button" onClick={(event) => props.deleteStudent(event, student.id)}>Delete</button>
                         <Link to={`/student/${student.id}/form`}>
                             <button type="button">UPDATE</button>
                        </Link>
                         
                     </div>
                 ))
             }</div>
             )}
             <Link to={'/student/form'}>
                 <button type="button">CREATE NEW STUDENT</button>
            </Link>
             
        </div>

        )
}