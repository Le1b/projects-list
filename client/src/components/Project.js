import React, { Component } from 'react';
import Controls from "./Controls";
import { get } from './../services/api';

class Project extends Component {
    state = {
        project: {}
    };

    componentDidMount() {
        const { id } = this.props.match.params;

        get(id)
            .then(res => this.setState({ project: res.data }));
    }

    render() {
        const { id, name, scope, managedBy } = this.state.project;

        return (
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">Project: {name}</h3>
                    <h6 className="card-subtitle mb-2 text-muted">managed by: {managedBy}</h6>
                    <div className="card-text">
                        Scope: {scope}
                    </div>

                    <div><Controls back edit delete id={id} /></div>
                </div>
            </div>
        );
    }
}

export default Project;
