var orm = require("../config/orm");

var travel = {
    all: function(cb) {
        orm.all("places", function(res) {
            cb(res);
        });
    },
    create: function(name, cb) {
        orm.create("places", [
            "place_name", "visited"
        ], [
            name, false
        ], cb);
    },
    update: function(id, cb) {
        var condition = "id=" + id;
        orm.update("places", {
            visited: true
        }, condition, cb);
    }
};

module.exports = travel;