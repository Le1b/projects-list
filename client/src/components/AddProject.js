import React, { Component } from 'react';
import v1 from 'uuid/v1';
import Controls from './Controls';
import { add, getUsers } from './../services/api';

class AddProject extends Component {
    state = {
        id: '',
        managedBy: '',
        name: '',
        scope: '',
        users: [],
        message: ''
    };
    handleName = (event) => {
        this.setState({
            name: event.target.value
        });
    };
    handleManagedBy = (event) => {
        this.setState({
            managedBy: event.target.value
        });
    };
    handleScope = (event) => {
        this.setState({
            scope: event.target.value
        });
    };
    handleSubmit = (event) => {
        event.preventDefault();

        add({
            ...this.state,
            id: v1()
        })
            .then(res => this.setState({
                message: res.data
            }));
    };

    componentDidMount() {
        getUsers()
            .then(res => this.setState({ users: res.data }));
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Project: <input type="text" value={this.state.name} onChange={this.handleName} /></h3>
                <div>Managed by: <select value={this.state.managedBy} onChange={this.handleManagedBy}>
                    {
                        this.state.users.map((user) => {
                            return <option key={v1()} value={user.name}>{user.name}</option>
                        })
                    }
                </select>
                </div>
                <div>Scope:</div>
                <textarea value={this.state.scope} cols="50" rows="10" onChange={this.handleScope} />

                <br />

                <input type="submit" value="Submit" />
                <span>{this.state.message}</span>

                <div><Controls back /></div>
            </form>
        );
    }
}

export default AddProject;
