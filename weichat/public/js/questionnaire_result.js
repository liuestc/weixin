/**
 * Created by forseeking on 2017/4/26.
 */
new Vue({
    el: '#app',
    data: {
        score: "",
        result: ""
    },
    mounted: function () {
        this.$nextTick(function () {
            this.setResult();
        });
    },
    methods: {
        GetQueryString: function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return (r[2]);
            return null;
        },
        getResult: function () {
            var sScore = this.GetQueryString("score");
            if (sScore != null) {
                var _sScore = decodeURIComponent(sScore);
                return _sScore;
            }
        },
        setResult: function () {
            var result = this.getResult();
            if (result >= 60 && result <= 100) {
                this.score = result;
                this.result = "你是一个文艺青年！"
            } else if (result >= 0 && result < 60) {
                this.score = result;
                this.result = " 你是一个普通青年！"
            } else {
                this.result = "参数错误！"
            }
        }
    }
})
