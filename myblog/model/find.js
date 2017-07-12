var User = require("../mongo/user.js");

function getByConditions(name){
    var wherestr = {'username' : name};
    let msg={}
    User.find(wherestr, function(err, res){
        if (err) {
            console.log("Error:" + err);
            msg.success=false
        }
        else {
            console.log("Res:" + res);
            msg.success=false
        }
    })
}

// getByConditions();

module.exports=getByConditions