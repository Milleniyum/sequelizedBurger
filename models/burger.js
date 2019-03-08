var orm = require('../config/orm.js');

var burger = {
    select: function(cb) {
        orm.select('burgers', function(result) {
            cb(result);
        });
    },
    insert: function(value, cb) {
        orm.insert('burgers', 'burger_name', value, function(result) {
            cb(result);
        });
    },
    update: function(condVal, cb) {
        orm.update('burgers', 'devoured', true, 'id', condVal, function(result) {
            cb(result);
        });
    }
};

module.exports = burger;