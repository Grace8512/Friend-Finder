
//module.export를 사용해야 surver.js(저장되어 있는 다른 파일)에서도 볼 수 있다. 
module.exports = function(app){
    var path = require("path");

    app.get("/survey", function(req,res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });//relative path를 absolute path로 바꿔준다. 

    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}




