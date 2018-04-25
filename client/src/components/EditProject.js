import React, { Component } from 'react';
import v1 from 'uuid/v1';
import Controls from './Controls';
import { get, getUsers, update } from './../services/api';

class EditProject extends Component {
    state = {
        id: '',
        managedBy: '',
        name: '',
        scope: '',
        users: []
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

        update(this.state.id, this.state)
            .then(res => this.setState({ ...res.data }));
    };

    componentDidMount() {
        getUsers()
            .then(res => this.setState({ users: res.data }));

        get(this.props.match.params.id)
            .then(res => this.setState({ ...res.data }));
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Project: <input className="form-control" type="text" value={this.state.name} onChange={this.handleName} /></h3>
                <div>Managed by: <select className="form-control" value={this.state.managedBy} onChange={this.handleManagedBy}>
                    {
                        this.state.users.map((user) => {
                            return <option key={v1()} value={user.name}>{user.name}</option>
                        })
                    }
                </select>
                </div>
                <div>Scope:</div>
                <textarea className="form-control" value={this.state.scope} rows="10" onChange={this.handleScope} />

                <br />

                <div><Controls save back edit delete id={this.state.id} /></div>
            </form>
        );
    }
}

export default EditProject;
