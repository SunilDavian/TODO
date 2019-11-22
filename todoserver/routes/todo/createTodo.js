export default createTodo = ({ knex }) => {
    return (req, res) => {
        knex('todo').insert({ name: 'Hello I have some task' })
            .then(function (result) {
                res.json({ success: true, message: 'ok' });
            })
    }
}