import React from 'react';
import { Link } from 'react-router-dom';


export default function (props) {


    const singleId = +props.singleId
    const singleCampus = props.campuses.filter(function (campus) {

        return campus.id === singleId
    })
    //console.log('STUDENTS', props.students)
    //console.log('CAMPID', singleId)
    const studentList = props.students.filter(function (student) {
        //console.log('STUDENT ID', student.CampusId)
        return student.CampusId === singleId
    })
    //console.log(singleCampus);
    //console.log('STUDENTLIST', studentList)
    return (

        <div className='container'>

            {singleId ? (
                <div> {                
                    singleCampus.map(campus => (
                     <div key={campus.id}>

                        <p> {campus.name}</p>
                        <img src={campus.image} />
                        <button type="button" onClick={(event) => props.deleteCampus(event, campus.id)}>Delete</button>
                    </div>
                    ))
                }
                 <h2> STUDENTS </h2>
                 {
                   
                    studentList.map(student => (
                     <div key={student.id}>
                    
                          <Link to={`/student/${student.id}`}>
                            <p> {student.name + '     '   +  student.email + '    ' + student.Campus.name}</p> 
                        </Link>
                     </div>
                 ))
                }</div>
            ) : (
                    props.campuses.map(campus => (
                        <div key={campus.id}>

                            <p> {campus.name}</p>
                            <Link to={`/campus/${campus.id}`}>
                                <img src={campus.image} />
                            </Link>
                        </div>
                    ))
                )
            }


        </div>

    )
}