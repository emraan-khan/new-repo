module.exports.user = function(req, res){
    return res.render('userProfile')
}


module.exports.orderRes = function(req, res){
    return res.end('<h1>Muh mai lele!!!</h1>')
}

module.exports.signIn = function(req,res){
    return res.render('user_signIn');
}

module.exports.signUp = function(req,res){
    return res.render('user_signUp');
}

// create action for user controller
module.exports.create = function(req,res){
    //TODO
};

//sign in and create session for user
module.exports.createSession = function(req, res){

};