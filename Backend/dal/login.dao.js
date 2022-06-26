const login = require('./index').db('shop').collection('login');

const objectId = require('mongodb').ObjectId;

const save = async({email, type, password}) => {
    const result = await login.insertOne({email, type, password});
    return result;
}

const getAll = async () => {
    const all = await login.find();
    return all.toArray();
}

const getById = async (id) => {
    return await login.findOne({_id:objectId(id)});
}

module.exports = {save, getAll, getById}; 