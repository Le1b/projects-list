import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProjectList from "./components/ProjectList";
import EditProject from "./components/EditProject";
import AddProject from "./components/AddProject";
import Project from "./components/Project";
import DeleteProject from "./components/DeleteProject";
import Navigation from "./components/Navigation";
import 'bootstrap/dist/css/bootstrap-reboot.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
    handleRefresh = () => {
        window.location.reload();
    };

    render() {
        return (
            <Router>
                <div className="container">
                    <Navigation />

                    <Route exact path="/" component={ProjectList} />
                    <Route path="/view/:id" component={Project} />
                    <Route path="/edit/:id" component={EditProject} />
                    <Route path="/delete/:id" component={DeleteProject} />
                    <Route path="/add" component={AddProject} />

                    <Navigation />
                </div>
            </Router>
        );
    }
}

export default App;
