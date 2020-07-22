var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        orm.all("burgers", function (results) {
            cb(results);
        });
    },
    create: (column, values, cb) => {
        orm.create("burgers", column, values, (results) => {
            cb(results);
        });
    },
    update: (column, newVal, whereCol, whereVal, cb) => {
        orm.update("burgers", column, newVal, whereCol, whereVal, (results) => {
            cb(results);
        });
    },
    
}


module.exports = burger;