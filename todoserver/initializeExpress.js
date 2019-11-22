import express from 'express';
import cors from 'cors';
import routes from './routes';
const PORT = 8090;

module.exports = (knex) => {
    const app = express();
    app.use(cors);
    app.use(routes({ knex}));
    app.listen(PORT, () => {
        console.log(`Server is listening on ${PORT}`);
    })
}