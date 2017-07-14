import React, { Component } from 'react';
import Navbar from './Navbar'
import { fetchStudents } from '../reducers/Students'
import { fetchCampuses } from '../reducers/Campus'
import store from '../store'
import Students from './SmartStudents'
import Campus from './SmartCampus'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

console.log('root', Students);

export default class Root extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const studentsThunk = fetchStudents();
    const campusThunk = fetchCampuses();
    store.dispatch(campusThunk);
    store.dispatch(studentsThunk);
  }
  render() {
    console.log(store.getState())
    return (
      <BrowserRouter>
        <div>

          <Navbar />
          <Switch>
            <Route exact path="/students" component={Students} />
            <Route path="/campus/:id" render={({match}) => <Campus singleId ={match.params.id} />} />
            <Route path="/student/:id" render={({match}) => <Students singleId ={match.params.id} />} />
            <Route path="/" component={Campus} />
          </Switch>

        </div>
      </BrowserRouter>
    )
  }
}