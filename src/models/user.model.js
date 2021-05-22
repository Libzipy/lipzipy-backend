'user strict';

var dbConn = require('../../config/db.config');

//Employee object create
var USER = function(user){
    this.user_id = user.user_id;
    this.user_name = user.user_name;
    this.user_surname = user.user_surname;
    this.user_phonenumber = user.user_phonenumber;
    this.user_email = user.user_email;
    this.user_password = user.user_password;
    this.user_gender = user.user_gender;
};
USER.create = function (newuser, result) {    
    dbConn.query("INSERT INTO user set ?", newuser, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });           
};
USER.findById = function (id, result) {
    dbConn.query("Select * from user where user_id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
USER.findAll = function (result) {
    dbConn.query("Select * from user", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('Users : ', res);  
            result(null, res);
        }
    });   
};
USER.update = function(id, user, result){
  dbConn.query("UPDATE user SET user_id=?,user_name=?,user_surname=?,user_phonenumber=?,user_email=?,user_password=?,user_gender=? WHERE user_id = ?", [user.user_id,user.user_name,user.user_surname,user.user_phonenumber,user.user_email,user.user_password,user.user_gender, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
USER.delete = function(id, result){
     dbConn.query("DELETE FROM user WHERE user_id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= USER ;