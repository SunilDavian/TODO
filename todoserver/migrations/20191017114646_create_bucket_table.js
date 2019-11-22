
exports.up = function (knex) {
    return knex.schema
        .createTable('bucket', function (table) {
            table.increments('id');
            table.string('name', 255).notNullable();
            table.string('status');
            table.date('created_date');
            table.date('modified_date');
        })

};

exports.down = function (knex) {
    return knex.schema
        .dropTable("bucket");
};
