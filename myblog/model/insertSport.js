var Sport = require("../mongo/sport.js");

/*promise版本*/
function insertSport(data){

	//如果有相同openid则更新
	// 更新注意去重，如何去重
	return new Promise((resolve,reject)=>{
		var sport = new Sport({
	        sportData : data.sport,
	        openid:data.openid                      //最近登录时间
	    });
		let saveStatus=sport.save(function (err, res) {
		    	console.log("sport")

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

module.exports=insertSport
