'use strict';
const { Router } = require('express');
import todo from './todo';
import bucket from './bucket';

module.exports = async function initApi({ knex }) {
    const router = Router();

    router.use('/todo', todo({ knex }));
    router.use('/bucket', bucket({ knex }));
    return router;
};
