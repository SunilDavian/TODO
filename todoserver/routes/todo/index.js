'use strict';
const { Router } = require('express');
import getTodo from './getTask';
import createTodo from './createTodo';

module.exports = function initRoutes({ knex }) {
    const router = Router();
    router.get(
        '/',
        getTodo({ knex })
    );
    router.post(
        '/',
        createTodo({ knex })
    );
    return router;
};
