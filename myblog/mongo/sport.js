var mongoose = require('./connect.js'),
    Schema = mongoose.Schema;

var SportSchema = new Schema({          
    openid : { type: String },                    //用户账号
	sportData:{ type: Object}                   //最近登录时间
});


module.exports = mongoose.model('SportSchema',SportSchema);