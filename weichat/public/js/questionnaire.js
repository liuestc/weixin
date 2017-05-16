/**
 * Created by forseeking on 2017/4/25.
 */
new Vue({
    el: "#app",
    data: {
        item: [
            {
                question: "你喜欢背着包到处去旅行吗吗，西藏的蓝天白云，丽江的小资情调，广西的秀丽山水曾经有吸引到你吗？",
                score: 0,
            },
            {
                question: "你是个重感情重生活重家庭重事业的超重青年吗？",
                score: 0,
            },
            {
                question: "平时新浪百度推送给你的娱乐新闻，你会有兴趣打开看吗？",
                score: 0,
            },
            {
                question: "深夜总是个多愁善感的时刻，你会趁这个时间好好想想，你的前任你的未来你的家庭，然后成功失眠换回早晨两个黑眼圈吗？",
                score: 0,
            },
            {
                question: "看美剧会让你像吃药一样戒不掉吗？",
                score: 0,
            },
            {
                question: "你的成熟程度与你的年龄相符吗？",
                score: 0,
            },
            {
                question: "对于言情风格的小说，你会有看上瘾，晚上还举着电筒在被窝里坚持看完的时候吗？",
                score: 0,
            },
            {
                question: "步步惊心，宫这些穿越剧看多了，你会幻想有一刻撞电线，一朝穿越回唐朝成为皇贵妃吗？",
                score: 0,
            },
            {
                question: "人生百年谁不曾挥斥方遒，谁不曾大闹天宫，谁不曾潇洒人生，谁不曾孤单上路。你会觉得自己曾是少年，是大话西游里那个不羁的至尊宝吗？",
                score: 0,
            },
            {
                question: "你介意在别人面前秀恩爱，狂洒狗粮满天飞吗？",
                score: 0,
            }
        ],
        itemShow: {
            num: 1,
            question: "你喜欢背着包到处去旅行吗吗，西藏的蓝天白云，丽江的小资情调，广西的秀丽山水曾经有吸引到你吗？",
            score: 0,
        },
        questionNow: 0,
        checkYes: false,
        checkNo: false,
        nextTitle: "下一题",
    },
    methods: {
        checkItem: function (value) {
            var _this = this;
            if (value == 1) {
                _this.checkYes = true;
                _this.checkNo = false;
            } else if (value == 2) {
                _this.checkNo = true;
                _this.checkYes = false;
            }
        },
        nextQuestion: function () {
            var i = this.questionNow;
            if (!this.checkYes && !this.checkNo) {
                alert("请选择一个选项");
            } else {
                if (i >= 0 && i <= 8) {
                    this.questionNow++;
                    this.itemShow.question = this.item[i + 1].question;
                    this.itemShow.num++;
                    if (this.checkYes) {
                        this.item[i].score = 10;
                    } else if (this.checkNo) {
                        this.item[i].score = 0;
                    }
                    this.checkYes = false;
                    this.checkNo = false;
                    if (i == 8) {
                        this.nextTitle = "查看结果"
                    }
                } else if (i == 9) {
                    if (this.checkYes) {
                        this.item[i].score = 10;
                    } else if (this.checkNo) {
                        this.item[i].score = 0;
                    }
                    var all = 0;
                    this.item.forEach(function (value, index) {
                        all = all + value.score;
                    });
                    window.location.href = "questionnaire_result.html?score=" + all + ""

                }
            }

        }
    }
})