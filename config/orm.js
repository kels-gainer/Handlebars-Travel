var connection = require("./connection");

// organizing information to fit into mysql syntax easier

function questionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function objSql(ob) {
  // column1=value, column2=value2,...
  var arr = [];

  for (var key in ob) {
    arr.push(key + "=" + ob[key]);
  }

  return arr.toString();
}

// Objects for sql

var orm = {
    all: function(table, cb) {
      var queryString = "SELECT * FROM " + table + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    create: function(table, cols, vals, cb) {
      var queryString = "INSERT INTO " + table;
  
      queryString += " (";
      queryString += cols.toString();
      queryString += ") ";
      queryString += "VALUES (";
      queryString += questionMarks(vals.length);
      queryString += ") ";
  
      console.log("orm" + queryString);
  
      connection.query(queryString, vals, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    update: function(table, objColVals, condition, cb) {
      var queryString = "UPDATE " + table;
  
      queryString += " SET ";
      queryString += objSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;
  
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
      
      // update: function(table, objColVals, condition, cb) {
      //   var queryString = "UPDATE " + table;
    
      //   queryString += " SET ";
      //   queryString += objSql(objColVals);
      //   queryString += " WHERE ";
      //   queryString += condition;
    
      //   console.log(queryString);
      //   connection.query(queryString, function(err, result) {
      //     if (err) {
      //       throw err;
      //     }
    
      //     cb(result);
      //   });
      // },
      // delete: function(table, condition, cb) {
      //   var queryString = "DELETE FROM " + table;
      //   queryString += " WHERE ";
      //   queryString += condition;
    
      //   connection.query(queryString, function(err, result) {
      //     if (err) {
      //       throw err;
      //     }
    
      //     cb(result);
      //   });
      // }
    };
    
    module.exports = orm;