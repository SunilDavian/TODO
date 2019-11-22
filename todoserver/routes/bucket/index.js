'use strict';
const { Router } = require('express');
import getBucket from './getBucket';
import createBucket from './createBucket';

module.exports = function initRoutes({ knex }) {
    const router = Router();
    router.get(
        '/',
        getBucket({ knex })
    );
    router.post(
        '/',
        createBucket({ knex })
    );
    return router;
};
