import React, {Component} from 'react';
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
const {REACT_APP_BASE_URL} = process.env;


export default class CreateExercise extends Component{
    constructor(props) {
        super(props)
        this.state = {
            username:"",
            description:"",
            duration:"",
            date: new Date(),
            users:[]
        }
    }
   
    componentDidMount = () =>{
        axios.get(`${REACT_APP_BASE_URL}/users`)
        .then(res=>{
            if(res.data.length>0){
                this.setState({
                    users:res.data.map(users=>users.username),
                    username:res.data[0].username
                })
            }
        })
        .catch(err=>console.log(err))
    }
    onChangeUsername=(e)=>{
        this.setState({username:e.target.value})
        
    }
    onChangeDescription=(e)=>{
        this.setState({description:e.target.value})
    }
    onChangeDuration=(e)=>{
        this.setState({duration:e.target.value})
    
    }
    onChangeDate=(date)=>{
        this.setState({date})
    }
    onSubmit=(e)=> {
        e.preventDefault();
        alert("Exercise log successfully created")
        const exercise = {
            username:this.state.username,
            description:this.state.description,
            duration:this.state.duration,
            date: this.state.date
        }
        axios.post(`${REACT_APP_BASE_URL}/exercise/add`, exercise)
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
    }
    render() {
        return(
            <div className="container">
                <h3>Create New Exercise Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <select
                        required
                        className="form-control"
                        defaultValue={this.state.username}
                        onInput={this.onChangeUsername}>
                            {
                                this.state.users.map(function(user){
                                    return <option
                                        key={user}
                                        defaultValue={user}>{user}
                                    </option>;
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input type="text"
                        className="form-control"
                        onInput={this.onChangeDescription}/>
                    </div>
                    <div className="form-group">
                        <label>Duration(in minutes): </label>
                        <input
                        type="text"
                        className="form-control"
                        defaultValue={this.state.duration}
                        onInput = {this.onChangeDuration}/>
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                            selected={this.state.date}
                            onChange={this.onChangeDate.bind(this.value)}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit"

                        value="Create Exercise Log"
                        className="btn btn-primary"
                        onClick={this.onSubmit}
                        />
                    </div>
                </form>
            </div>
        )
    }
}