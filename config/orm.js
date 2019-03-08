var connection = require('../config/connection.js');

var orm = {
    select: function(table, cb) {
        var queryString = 'SELECT * FROM ??;';
        connection.query(queryString, [table], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insert: function(table, col, value, cb) {
        var queryString = 'INSERT INTO ?? (??) VALUES (?);';
        connection.query(queryString, [table, col, value], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    update: function(table, col, value, condCol, condVal, cb) {
        var queryString = 'UPDATE ?? SET ?? = ? WHERE ?? = ?';
        connection.query(queryString, [table, col, value, condCol, condVal], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;