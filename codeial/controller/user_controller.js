module.exports.user = function(req, res){
    return res.render('userProfile')
}


module.exports.orderRes = function(req, res){
    return res.end('<h1>Muh mai lele!!!</h1>')
}