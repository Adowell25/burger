// Import MySQL connection.
var connection = require("./connection");

var orm = {
    select: (table, cb) => {
        var query = `SELECT * FROM ??`;

        connection.query(query, [table], (err, results) => {
            if (err) {
                throw err;
            }
            console.log(results);
            cb(results);
        });
    },

    create: (table, column, value) => {
        var insertQuery = `INSERT INTO ?? (??) VALUES(?)`

        connection.query(insertQuery, [table, column, value], (err, result) => {
            if (err) {
                throw err;
            }
            console.log(result);
        });
    },

    update: (table, column, newVal, whereCol, whereVal) => {
        var updateQuery = `UPDATE ?? SET ?? = ? WHERE ?? = ?`

        connection.query(updateQuery, [table, column, newVal, whereCol, whereVal], (err, result) => {
            if (err) {
                throw err;
            }
            console.log(result);
        });
    },

    delete: (table, column, value) => {
        let deleteQuery = `DELETE FROM ?? WHERE ?? = ?`

        connection.query(deleteQuery, [table, column, value], (err, result) => {
            if (err) {
                throw err;
            }
            console.log(result);
        });
    }
}

module.exports = orm;
