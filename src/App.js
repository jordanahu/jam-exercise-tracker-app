import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component.js";
import CreateExercise from "./components/create-exercise.component.js";
import EditExercise from "./components/edit-exercise.component.js";
import CreateUser from "./components/create-user.component.js";
import ExerciseList from "./components/exercises-list.component.js";


function App() {
  return (
      <Router className="container" >
      <Navbar/>
      <Route path="/" exact component={ExerciseList}/>
      <Route path="/exercise/update/:id" component={EditExercise}/>
      <Route path="/create" component={CreateExercise}/>
      <Route path="/user" component={CreateUser}/>
    </Router>
  );
}

export default App;
