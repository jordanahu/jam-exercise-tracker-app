import React, {Component} from 'react';
import axios from "axios";
const {REACT_APP_BASE_URL} = process.env;


export default class CreateUser extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username:""
        }
    }
    onChangeUsername=(e)=>{
        this.setState({username:e.target.value})
    }
    onSubmit=(e)=> {
        e.preventDefault();
        const user = {
            username:this.state.username,
        }
        this.setState({username:""})
        axios.post(`${REACT_APP_BASE_URL}/users/add`, user)
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
    }

    clearUser(e){
        e.target.value="";
        alert("User succesfully createad!")
    }
    render() {
        return(
            <div className="container">
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text"
                        required
                        className="form-control"
                        defaultValue={this.state.username}
                        onChange={this.onChangeUsername}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" onClick={e=>this.clearUser(e)} value="Create User" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}