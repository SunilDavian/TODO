export default createTodo = ({ knex }) => {
    return (req, res) => {
        knex('bucket').insert({ name: 'IT' })
            .then(function (result) {
                res.json({ success: true, message: 'ok' });
            })
    }
}