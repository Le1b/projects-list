const express = require('express');
const router = express.Router();

let projectsJson = require('./../data/projects.json');
const users = require('./../data/users.json');


const appRouter = (app) => {
    let projects = JSON.parse(JSON.stringify(projectsJson));

    app.use('/api/v1', router);

    router
        .route('/projects')
        .get((req, res) => {
            res.send({
                statusCode: 200,
                data: projects
            });
        })
        .post((req, res) => {
            projects.push(req.body);

            res.send({
                data: 'Project added'
            });

            console.log('[Server API] project added', req.body);
        });

    router
        .route('/projects/:id')
        .get((req, res) => {
            const project = projects.find((project) => {
                return project.id === req.params.id;
            });

            res.send({
                statusCode: 200,
                data: project
            });
        })
        .put((req, res) => {
            projects = projects.map((project) => {
                return project.id === req.params.id ? req.body : project;

            });

            console.log('[Server API] project updated', req.body);

            res.send({
                statusCode: 200,
                data: req.body
            });
        })
        .delete((req, res) => {
            projects = projects.filter((project) => {
                return project.id !== req.params.id;
            });

            res.send({
                data: 'Project deleted'
            });
        });

    router
        .route('/users')
        .get((req, res) => {
            res.send({
                statusCode: 200,
                data: users
            });
        })
};

module.exports = appRouter;
