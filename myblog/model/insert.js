var User = require("../mongo/user.js");

/* 最初版本*/
// function insert(data,callback) {
// 	console.log("传入的data",data)
//     var user = new User({
//         username : data.username,                 //用户账号
//         userpwd: data.psw,                            //密码
//         // userage: 37,                                //年龄
//         logindate : new Date()                      //最近登录时间
//     });
// let saveStatue=user.save(callback);
//  // let saveStatus=user.save(function (err, res) {
//  //    	console.log("userSave")

//  //        if (err) {
//  //            console.log("Error:" + err);
//  //            result=res
//  //        }
//  //        else {
//  //        	console.log("插入成功")
//  //            console.log("Res:" + res);
//  //            result=res
//  //        }

//  //    });
//  // return result
// }

// // insert();
// module.exports=insert



/*function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done');  //这里的resolve什么也没做
  });
}

timeout(100).then((value) => {
  console.log(value);
});*/

/*promise版本*/
function insert(data){
	return new Promise((resolve,reject)=>{
		var user = new User({
	        username : data.username,                 //用户账号
	        userpwd: data.psw,                            //密码
	        // userage: 37,                                //年龄
	        logindate : new Date(),
	        openid:data.openid                      //最近登录时间
	    });
		let saveStatus=user.save(function (err, res) {
		    	console.log("userSave")

		        if (err) {
		            console.log("Error:" + err);
		            // result=res
		        }
		        else {
		        	console.log("插入成功")
		            console.log("Res:" + res);
		            resolve(res)
		            // result=res
		        }

		    });	    
	})
}

module.exports=insert
