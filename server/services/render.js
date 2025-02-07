const axios = require('axios');
const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';



exports.homeRoutes=(req,res)=>{
    //make a get request to api/users
    axios.get(`${BASE_URL}/api/users`)
        .then(function(response){
            res.render('index',{users:response.data});
        })
        .catch(err=>{
            res.send(err);
        })
    
}

exports.add_user=(req,res)=>{
    res.render('add_user');
}

exports.update_user=(req,res)=>{
    axios.get(`${BASE_URL}/api/users`,{params:{id:req.query.id}})
        .then(function(userdata){
            res.render("update_user",{user:userdata.data})

        })
        .catch(err=>{
            res.send(err);
        })
}


