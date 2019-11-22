import knex from 'knex';
import knexConfig from './knexfile';

module.exports = async function () {
    const node_env = process.env.NODE_ENV || 'development';
    var knexInstance = knex(knexConfig[node_env]);
    return knexInstance;
}