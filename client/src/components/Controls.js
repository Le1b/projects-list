import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { remove } from '../services/api';

class Controls extends Component {
    state = {
        isHidePopUp: true,
        message: ''
    };
    handlePopup = (event) => {
        event.preventDefault();

        this.setState({
            isHidePopUp: false,
        });
    };
    handleCancelPopup = (event) => {
        event.preventDefault();

        this.setState({
            isHidePopUp: true
        });
    };
    handleConfirmDelete = () => {
        this.setState({
            isHidePopUp: false
        });

        remove(this.props.id)
            .then(res => this.setState({ message: res.data }))
            .then(() => {
                setTimeout(() => {
                    this.setState({
                        isHidePopUp: true
                    });
                }, 1000)
            })
    };

    saveLink() {
        return (
            this.props.save && <input type="submit" value="Submit" className="btn btn-success" />
        );
    }

    backLink() {
        return (
            this.props.back && <Link to="/" className="btn btn-primary">Back</Link>
        );
    }

    viewLink() {
        return (
            this.props.view && <Link to={`/view/${this.props.id}`} className="btn btn-info">View</Link>
        );
    }

    editLink() {
        return (
            this.props.edit && <Link to={`/edit/${this.props.id}`} className="btn btn-secondary">Edit</Link>
        );
    }

    deleteLink() {
        return (
            this.props.delete && <button className="btn btn-danger" onClick={this.handlePopup}>Delete</button>
        );
    }

    render() {
        return (
            <React.Fragment>
                <span>
                    {this.saveLink()} {this.backLink()} {this.viewLink()} {this.editLink()} {this.deleteLink()}
                </span>
                <div className={`popup ${this.state.isHidePopUp && 'hide'}`}>
                    <div>
                        <h4>Are sure to delete project item?</h4>
                        <div>
                            <button className="btn btn-danger" onClick={this.handleConfirmDelete}>Yes</button>
                            <button className="btn btn-primary" onClick={this.handleCancelPopup}>No</button>
                        </div>
                        <div>
                            {this.state.message}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Controls;
