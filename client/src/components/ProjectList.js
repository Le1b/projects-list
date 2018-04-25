import React, { Component } from 'react';
import v1 from 'uuid/v1';
import Controls from "./Controls";
import { getAll } from './../services/api';

class ProjectList extends Component {
    state = {
        projects: []
    };

    componentDidMount() {
        getAll()
            .then(res => this.setState({ projects: res.data }));
    }

    render() {
        return (
            <table className="table table-striped">
                <tbody>
                {
                    this.state.projects.map((project, index) => (
                        <tr key={v1()}>
                            <th scope="row">
                                {index + 1}
                            </th>
                            <td>
                                {project.name} managed by ({project.managedBy})
                            </td>
                            <td>
                                <Controls view edit delete id={project.id} />
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        );
    }
}

export default ProjectList;
