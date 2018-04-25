import React, { Component } from 'react';
import Controls from './Controls';
import { remove } from '../services/api';

class DeleteProject extends Component {
    state = {
        message: ''
    };

    handleDelete = () => {
        remove(this.props.match.params.id)
            .then(res => this.setState({ message: res.data }))
    };

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <div>
                    <button onClick={this.handleDelete}>Delete</button>
                </div>
                <Controls back />
            </div>
        );
    }
}

export default DeleteProject;
