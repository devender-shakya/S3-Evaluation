const jwt = require('jsonwebtoken')
const User = require('../models/User')

const auth = async(req, res,next)=>{
    try{
        const token = req.header('Authorization').replace('Bearer','');
    }
    catch(error){

    }
}