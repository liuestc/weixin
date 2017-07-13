var User = require("../mongo/user.js");

function findName(name){

	return new Promise((resolve,reject)=>{
		var wherestr = {'username' : name};
	    User.find(wherestr, function(err, res){
	        if (err) {
	            console.log("Error:" + err);
	        }
	        else {
	            console.log("Res:" + res);
	            resolve(res)
	        }
	    })
	})
}

// find();

module.exports=findName