import React, { Component } from 'react';

const blankFormState = {
  name: '',
  email: '',
  CampusId: ''
};

export default class NewStudentForm extends Component {
    constructor(props){
    super(props);
    this.state = blankFormState;
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.findStudent = this.findStudent.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this)
}

    handleChange (event) {
    const target = event.target;
    const value = target.value;
    //console.log(value);
    this.setState({
      [target.name]: value
    });
  }

  findStudent(){
    if(this.props.currentStudentId){
      const wantedId = +this.props.currentStudentId
        
        const studentList = this.student = this.props.students.filter((student) => {
        //console.log('IDS', student.id, wantedId)
         return student.id === wantedId
    })
    return studentList
    } 
   return null;
  }

  handleSubmit (event) {
    event.preventDefault();
    this.props.addStudent(this.state)
    this.props.history.push('/')
  }

  handleUpdate (event){
    event.preventDefault();
   // console.log(this.state);
    console.log('IN HANDLE UPDATe', this.state);
    this.props.updateStudent(this.state, this.props.currentStudentId)
    this.props.history.push('/')
  }

  createStudent(){
      return (
        <div>
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <h2>Create a new Student</h2>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input
                className="form-control"
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </label>
            <hr />
            <label>
              CampusId:
              <select
                className="form-control"
                name="CampusId"
                value={this.state.CampusId}
                onChange={this.handleChange}
              >
              {
                this.props.campuses.map(campus => (

                    <option value={campus.id} key={campus.id}>{campus.name}</option>
                ))
            
              }
              
              </select>
            </label>
             <label>
              Email:
              <input
                className="form-control"
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </label>
           
            <input
              className="btn btn-success"
              type="submit"
            />
          </form>
        </div>
      </div>
      )

      
  }

  updateStudent(student){
      return (
        <div>
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <h2>Update {student[0].name} </h2>
          <form onSubmit={this.handleUpdate}>
            <label>
              Name:
              <input
                className="form-control"
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </label>
            <hr />
            <label>
              CampusId:
              <select
                className="form-control"
                name="CampusId"
                value={this.state.CampusId}
                onChange={this.handleChange}
              >
              {
                this.props.campuses.map(campus => (

                    <option value={campus.id} key={campus.id}>{campus.name}</option>
                ))
            
              }
              
              </select>
            </label>
             <label>
              Email:
              <input
                className="form-control"
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </label>
           
            <input
              className="btn btn-success"
              type="submit"
            />
          </form>
        </div>
      </div>
      )
  }

  render () {
    const student = this.findStudent()
    console.log(student)
    if (student){
        return this.updateStudent(student)
    } else {
       return this.createStudent()
    }
  }
}