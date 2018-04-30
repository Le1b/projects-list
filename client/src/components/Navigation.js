import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <ul>
                <li>
                    <Link className="btn btn-light" to="/add">Add project</Link>
                </li>
                <li>
                    <button className="btn btn-light" onClick={this.handleRefresh}>Refresh</button>
                </li>
            </ul>
        );
    }
}

export default Navigation;
