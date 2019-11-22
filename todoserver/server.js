import initializeDb from './initializeDB';
import initializeExpress from './initializeExpress';

async function startServer() {
    let knexInstance = await initializeDb();
    knexInstance.migrate.latest().then(_ => {
        initializeExpress(knexInstance);
    }).catch(error => {
        console.log("Error While -----------------", error);
    })
};

startServer();








