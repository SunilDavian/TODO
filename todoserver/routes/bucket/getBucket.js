export default getTodo = ({ knex }) => {
    return (req, res) => {
        knex('bucket')
            .select('id', 'name')
            .then((todos) => {
                console.log("todos------------", JSON.stringify(todo));
                return res.status(500).json({ todo: todos });
            });
    }
}