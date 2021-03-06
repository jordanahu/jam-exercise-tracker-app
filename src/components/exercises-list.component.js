import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
const {REACT_APP_BASE_URL} = process.env;


const Exercise = props=>(
        <tr>
            <td>{props.exercise.username}</td>
            <td>{props.exercise.description}</td>
            <td>{props.exercise.duration}</td>
            <td>{props.exercise.date.substring(0,10)}</td>
            <td><button className="btn btn-grey btn-sm"><Link to={`/exercise/update/${props.exercise._id}`}>edit</Link></button><button className="btn btn-danger btn-sm"  onClick={()=>props.deleteExercise(props.exercise._id)}>delete</button></td>
        </tr>
    )

export default class ExerciseList extends Component{
    constructor(props) {
        super(props)
        this.state = {
            exercises:[]
        }
    }
    componentDidMount=()=> {
        axios.get(`${REACT_APP_BASE_URL}/exercise`)
        .then(res=>{
            this.setState({
                exercises:res.data
            })
        })
        .catch(err=>console.log(err))
    }
    deleteExercise = (id)=>{
        axios.delete(`${REACT_APP_BASE_URL}/exercise/${id}`)
        .catch(err=>console.log(err))
        this.setState(
            { exercises:this.state.exercises.filter(val=>val._id!==id) }
        )

    }
    exerciseList = ()=>{
        return (this.state.exercises.map(cxerc=>{
            return <Exercise exercise={cxerc} deleteExercise={this.deleteExercise} key={cxerc._id}/>
        }))
    }
    render() {
        return(
            <div className="container">
                <h3>Logged Exercises</h3>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration(minutes)</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.exerciseList()}
                    </tbody>
                </table>
            </div>
        )
    }
}