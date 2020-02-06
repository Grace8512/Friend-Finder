module.exports = function(app){
    var friends = require("../data/friends");
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    app.post("/api/friends", function(req, res){
        var userScore = req.body.scores;
        //submit버튼을 눌렀을때 나오는 유저의 스코어 값.
        var minScore = 50;
        var minIndex = 0;
        for(var i = 0 ; i < friends.length; i++){
            var calculator = calculatorNum(userScore, friends[i].scores);
            if(calculator < minScore){
                minScore = calculator;
                minIndex = i;
            }
        }
        friends.push(req.body);
        //req.body에 새로운 프렌즈 데이터가 들어있는데 그걸 프렌즈 베리어블안에 넣어줌.  
        console.log(friends);
        res.json(friends[minIndex]);
    })
}

//user1에는 유저 스코어 유저2에는 프렌즈 리스트. 
function calculatorNum(user1, user2){
    var totalNum = 0;
    for(var i=0; i< user1.length; i++){
        totalNum += Math.abs(user1[i] - user2[i]);
        //math.absolute는 절대값으로 계산한 결과를 알려주는 펑션. 
    }
    return totalNum;
}

