var User = require("../mongo/user.js");

function insert(data) {
	console.log("传入的data",data)
	let result={}
    var user = new User({
        username : data.username,                 //用户账号
        userpwd: data.psw,                            //密码
        // userage: 37,                                //年龄
        logindate : new Date()                      //最近登录时间
    });

	let saveStatue=user.save(function (err, res) {
    	console.log("userSave")

        if (err) {
            console.log("Error:" + err);
            result=res
            // return {
            // 	// msg:"数据写入失败",
            // 	success:false
            // }
        }
        else {
        	console.log("插入成功")
            console.log("Res:" + res);
            result=res
            // return {
            // 	// msg:"数据写入成功",
            // 	success:true

            // }
        }

    });
    console.log("saveStatue",saveStatue)
    // 
    return result
}

// insert();
module.exports=insert